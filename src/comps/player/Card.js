import { playCard } from "../../helpers";

function Card(props) {
  return (
    <span
      style={{
        backgroundColor: props.card.color,
        padding: "0.5em",
        fontSize: "3em",
      }}
      key={props.card.id}
    >
      {props.card.number}
      <button
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
      </button>
    </span>
  );
}

export default Card;
