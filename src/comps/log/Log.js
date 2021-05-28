import { Container } from "react-bootstrap";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import "./Log.css";
import { useState } from "react";
import Settings from "./Settings";

function Log(props) {
  const [cogPresence, setPresence] = useState(false);
  const [cogSpin, setSpin] = useState(false);

  return (
    <Container id={"log"}>
      <h1 className="logTitle">Log</h1>
      <Icon
        className="settingsTitle"
        icon={faCog}
        size="2x"
        spin={cogSpin}
        onMouseOver={() => setSpin(true)}
        onMouseLeave={() => setSpin(false)}
        onClick={() => setPresence(!cogPresence)}
      />

      {cogPresence ? (
        <Settings xray={props.xray} toggleXray={props.toggleXray} />
      ) : (
        props.log.map((logItem) => <h4>{logItem}</h4>)
      )}
    </Container>
  );
}

export default Log;
