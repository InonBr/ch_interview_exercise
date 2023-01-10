import { useEffect, useState } from "react";
import { MessageBodyInterface } from "../../lib/apiInterfaces";

const MsgMessengerView = (props: {
  newMsgResponse: MessageBodyInterface | undefined;
}) => {
  const [msgArr, setMsgArr] = useState<MessageBodyInterface[]>([]);

  console.log(msgArr);

  useEffect(() => {
    if (props.newMsgResponse) {
      // @ts-ignore
      setMsgArr((prev) => [...prev, props.newMsgResponse]);
    }
  }, [props]);

  return (
    <ul>
      {msgArr.map((msg) => (
        <li key={msg.message}>
          {msg.message} {msg.phoneNumber}
        </li>
      ))}
    </ul>
  );
};

export default MsgMessengerView;
