import { playCard } from "../../helpers";
import { Button, Card as BootstrapCard } from "react-bootstrap";

function Card(props) {
  return (
    <BootstrapCard
      key={props.card.id}
      id={"card"}
      style={{ backgroundColor: props.card.color }}
    >
      <BootstrapCard.Body>
        <BootstrapCard.Text id="cardNum">
          {props.card.number}
        </BootstrapCard.Text>
      </BootstrapCard.Body>

      <Button
        style={{ marginBottom: "1rem" }}
        variant="dark"
        onClick={() => {
          if (!props.playerTurn) {
            return;
          }
          const cardData = playCard(
            props.discardPile[props.discardPile.length - 1],
            props.hand,
            props.card
          );
          if (!cardData) {
            return;
          }
          props.setDiscard([...props.discardPile, ...cardData.discardCards]);
          props.setHand(cardData.newHand);
          props.setTurn(false);
          props.compTurn(
            `Player played a ${props.card.color} ${props.card.number}`,
            props.card
          );
        }}
      >
        play
      </Button>
    </BootstrapCard>
  );
}

export default Card;
