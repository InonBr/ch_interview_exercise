import { useEffect, useState } from "react";
import { MessageBodyInterfaceResponse } from "../../lib/apiInterfaces";
import { getAllMsgs } from "../../lib/api";

const MsgMessengerView = (props: {
  newMsgResponse: MessageBodyInterfaceResponse | undefined;
}) => {
  const [msgArr, setMsgArr] = useState<MessageBodyInterfaceResponse[]>([]);

  useEffect(() => {
    getAllMsgs().then((res: MessageBodyInterfaceResponse[]) => {
      setMsgArr(res);
    });

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
