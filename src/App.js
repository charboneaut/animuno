import { useState } from "react";
import "./App.css";
import { compAction, compCantPlay } from "./comp";
import { createDraw, playCard } from "./helpers";

function App() {
  const [hand, setHand] = useState(createDraw(7));
  const [handComp, setHandComp] = useState(createDraw(7));
  const [discardPile, setDiscard] = useState(createDraw(1));
  const [drawPile, setDraw] = useState(createDraw(50));
  const [playerTurn, setTurn] = useState(true);
  const [log, setLog] = useState([]);

  function compTurn(playerLog, mostRecentCard) {
    // the most recent player action and top of the discard have to passed rather than taken from state because async blah blah
    console.log("computer tink hard");
    let pseudoHand = handComp;
    let ouchCount = 0;
    while (compCantPlay(pseudoHand, mostRecentCard)) {
      pseudoHand.push(drawPile.pop());
      ouchCount++;
    }
    setHandComp(pseudoHand);
    const cardData = compAction(
      mostRecentCard,
      handComp,
      drawPile[drawPile.length - 1]
    );
    setHandComp(cardData.newHand);
    setDiscard([...discardPile, ...cardData.discardCards]);
    setTurn(true);
    if (ouchCount > 0) {
      setLog([
        ...log,
        playerLog,
        `Computer couldn't play and drew ${ouchCount} cards, then played a ${cardData.playedCard.color} ${cardData.playedCard.number}`,
      ]);
    } else {
      setLog([
        ...log,
        playerLog,
        `Computer played a ${cardData.playedCard.color} ${cardData.playedCard.number}`,
      ]);
    }
  }

  return (
    <div className="App">
      <h1>{playerTurn ? "Player Turn" : "Comp Turn"}</h1>
      {hand.map((card) => (
        <span
          style={{
            backgroundColor: card.color,
            padding: "0.5em",
            fontSize: "3em",
          }}
          key={card.id}
        >
          {card.number}
          <button
            onClick={() => {
              if (!playerTurn) {
                return;
              }
              const cardData = playCard(
                discardPile[discardPile.length - 1],
                hand,
                card
              );
              if (!cardData) {
                return;
              }
              setDiscard([...discardPile, ...cardData.discardCards]);
              setHand(cardData.newHand);
              setTurn(false);
              compTurn(`Player played a ${card.color} ${card.number}`, card);
            }}
          >
            play
          </button>
        </span>
      ))}
      <div style={{ marginTop: "5%" }}>
        {handComp.map((card) => (
          <span
            style={{
              backgroundColor: card.color,
              padding: "0.5em",
              fontSize: "3em",
            }}
            key={card.id}
          >
            {card.number}
          </span>
        ))}
      </div>
      <div style={{ marginTop: "5%" }}>
        <span
          style={{
            backgroundColor: discardPile[discardPile.length - 1].color,
            padding: "0.5em",
            fontSize: "3em",
          }}
        >
          {discardPile[discardPile.length - 1].number}
        </span>
        {drawPile.length > 0 ? (
          <span
            style={{
              backgroundColor: drawPile[drawPile.length - 1].color,
              padding: "0.5em",
              fontSize: "3em",
            }}
          >
            {drawPile[drawPile.length - 1].number}
            <button
              onClick={() => {
                setHand([...hand, drawPile.pop()]);
              }}
            >
              draw
            </button>
          </span>
        ) : null}
      </div>
      <br />
      <div>
        <h1>Log</h1>
        {log.map((logItem) => (
          <h4>{logItem}</h4>
        ))}
      </div>
    </div>
  );
}

export default App;
