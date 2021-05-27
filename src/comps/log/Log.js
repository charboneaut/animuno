import { Container } from "react-bootstrap";
import "./Log.css";

function Log(props) {
  return (
    <Container id={"log"}>
      <h1>Log</h1>
      {props.log.map((logItem) => (
        <h4>{logItem}</h4>
      ))}
    </Container>
  );
}

export default Log;
