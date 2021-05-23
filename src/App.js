import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { compAction, compCantPlay } from "./comp";
import Center from "./comps/center/Center";
import CompHand from "./comps/compPlayer/CompHand";
import Log from "./comps/log/Log";
import PlayerHand from "./comps/player/PlayerHand";
import { createDraw } from "./helpers";

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
    <Container className="App" fluid>
      <Col>
        <CompHand handComp={handComp} />
        <Center
          discardPile={discardPile}
          drawPile={drawPile}
          setHand={setHand}
          hand={hand}
        />
        <PlayerHand
          playerTurn={playerTurn}
          hand={hand}
          discardPile={discardPile}
          setDiscard={setDiscard}
          setHand={setHand}
          setTurn={setTurn}
          compTurn={compTurn}
        />
      </Col>
      <Col>
        <Log log={log} />
      </Col>
    </Container>
  );
}

export default App;
