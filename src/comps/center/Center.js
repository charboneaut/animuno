import { Container } from "react-bootstrap";
import { Button, Card as BootstrapCard } from "react-bootstrap";
import "./Center.css";

function Center(props) {
  return (
    <Container id={"center"}>
      <BootstrapCard
        id="card"
        style={{
          backgroundColor:
            props.discardPile[props.discardPile.length - 1].color,
          marginRight: "1rem",
        }}
      >
        <BootstrapCard.Body>
          <BootstrapCard.Text id="cardNum">
            {props.discardPile[props.discardPile.length - 1].number}
          </BootstrapCard.Text>
        </BootstrapCard.Body>
      </BootstrapCard>
      <BootstrapCard
        id="card"
        style={{
          backgroundColor: props.drawPile[props.drawPile.length - 1].color,
        }}
      >
        <BootstrapCard.Body>
          <BootstrapCard.Text id="cardNum">
            {props.drawPile[props.drawPile.length - 1].number}
          </BootstrapCard.Text>
          <Button
            variant="dark"
            onClick={() => {
              props.setHand([...props.hand, props.drawPile.pop()]);
            }}
          >
            draw
          </Button>
        </BootstrapCard.Body>
      </BootstrapCard>

      {props.drawPile.length > 0 ? (
        <span>
          <h1>{props.playerTurn ? "Player Turn" : "Comp Turn"}</h1>
        </span>
      ) : null}
    </Container>
  );
}

export default Center;
