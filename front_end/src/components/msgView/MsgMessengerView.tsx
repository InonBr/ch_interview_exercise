import { useEffect, useState } from "react";
import { MessageBodyInterfaceResponse } from "../../lib/apiInterfaces";

const MsgMessengerView = (props: {
  newMsgResponse: MessageBodyInterfaceResponse | undefined;
}) => {
  const [msgArr, setMsgArr] = useState<MessageBodyInterfaceResponse[]>([]);

  useEffect(() => {
    if (props.newMsgResponse) {
      // @ts-ignore
      setMsgArr((prev) => [...prev, props.newMsgResponse]);
    }
  }, [props]);

  return (
    <ul>
      {msgArr.map((msg) => (
        <li key={msg.id}>
          {msg.message} {msg.phoneNumber} {new Date(msg.date).toUTCString()}
        </li>
      ))}
    </ul>
  );
};

export default MsgMessengerView;
