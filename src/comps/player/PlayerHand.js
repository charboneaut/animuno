import Card from "./Card";

function PlayerHand(props) {
  return (
    <>
      <h1>{props.playerTurn ? "Player Turn" : "Comp Turn"}</h1>
      {props.hand.map((card) => (
        <Card
          card={card}
          playerTurn={props.playerTurn}
          hand={props.hand}
          discardPile={props.discardPile}
          setDiscard={props.setDiscard}
          setHand={props.setHand}
          setTurn={props.setTurn}
          compTurn={props.compTurn}
        />
      ))}
    </>
  );
}

export default PlayerHand;
