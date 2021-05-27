import { Container } from "react-bootstrap";
import "./CompHand.css";
import { Card as BootstrapCard } from "react-bootstrap";

function CompHand(props) {
  return (
    <>
      <Container id={"compHand"}>
        {props.handComp.map((card) => (
          <BootstrapCard
            key={card.id}
            id="card"
            style={{ backgroundColor: card.color }}
          >
            <BootstrapCard.Body>
              <BootstrapCard.Text id="cardNum">
                {card.number}
              </BootstrapCard.Text>
            </BootstrapCard.Body>
          </BootstrapCard>
        ))}
      </Container>
    </>
  );
}

export default CompHand;
