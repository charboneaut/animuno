import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faGlasses } from "@fortawesome/free-solid-svg-icons";

function Settings(props) {
  return (
    <Container>
      <Row>
        <input
          className="toggler"
          type="checkbox"
          checked={props.xray}
          onClick={() => props.toggleXray(!props.xray)}
        />
        Toggle X-Ray Vision <Icon icon={faGlasses} className="settingItem" />
      </Row>
    </Container>
  );
}

export default Settings;
