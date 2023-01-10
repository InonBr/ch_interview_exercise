import { Col, Row } from "react-bootstrap";
import NewMsgForm from "./components/newMsg/NewMsgForm";
import { useState } from "react";
import { MessageBodyInterface } from "./lib/apiInterfaces";
import MsgMessengerView from "./components/msgView/MsgMessengerView";

function App() {
  const [newMsgResponse, setNewMsgResponse] = useState<MessageBodyInterface>();

  return (
    <div className="App">
      <Row>
        <Col>
          <NewMsgForm setNewMsgResponse={setNewMsgResponse} />
        </Col>
        <Col>
          <MsgMessengerView newMsgResponse={newMsgResponse} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
