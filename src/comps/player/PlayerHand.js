import { Container } from "react-bootstrap";
import Card from "./Card";
import "./PlayerHand.css";

function PlayerHand(props) {
  return (
    <Container id={"player"}>
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
    </Container>
  );
}

export default PlayerHand;
