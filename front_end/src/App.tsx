import { Col, Row } from "react-bootstrap";
import NewMsgForm from "./components/newMsg/NewMsgForm";

function App() {
  return (
    <div className="App">
      <Row>
        <Col>
          <NewMsgForm />
        </Col>
        <Col>
          <NewMsgForm />
        </Col>
      </Row>
    </div>
  );
}

export default App;
