import { Col, Row } from "react-bootstrap";
import NewMsgForm from "./components/newMsg/NewMsgForm";
import { useState } from "react";
import { MessageBodyInterface } from "./lib/apiInterfaces";

function App() {
  const [newMsgResponse, setNewMsgResponse] = useState<MessageBodyInterface>();

  console.log(newMsgResponse);

  return (
    <div className="App">
      <Row>
        <Col>
          <NewMsgForm setNewMsgResponse={setNewMsgResponse} />
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default App;
