import { Container } from "react-bootstrap";
import "./CompHand.css";
import { Card as BootstrapCard } from "react-bootstrap";
import { determineColor } from "../../helpers";

function CompHand(props) {
  return (
    <>
      <Container id={"compHand"}>
        {props.handComp.map((card) => (
          <BootstrapCard
            key={card.id}
            id="card"
            style={{ backgroundColor: determineColor(card, props.xray) }}
          >
            <BootstrapCard.Body>
              <BootstrapCard.Text id="cardNum">
                {props.xray ? card.number : "?"}
              </BootstrapCard.Text>
            </BootstrapCard.Body>
          </BootstrapCard>
        ))}
      </Container>
    </>
  );
}

export default CompHand;
