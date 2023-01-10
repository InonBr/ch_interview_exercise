import { Card } from "react-bootstrap";
import { MessageBodyInterfaceResponse } from "../../lib/apiInterfaces";

const MsgBox = (props: { msg: MessageBodyInterfaceResponse }) => {
  const { date, message, phoneNumber } = props.msg;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{phoneNumber}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {new Date(date).toUTCString()}
        </Card.Subtitle>
        <Card.Text>{message}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MsgBox;
