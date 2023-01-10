import { useEffect, useState } from "react";
import { MessageBodyInterfaceResponse } from "../../lib/apiInterfaces";
import { getAllMsgs } from "../../lib/api";
import MsgBox from "./MsgBox";
import "../styles/form.css";

const MsgMessengerView = (props: {
  newMsgResponse: MessageBodyInterfaceResponse | undefined;
}) => {
  const [msgArr, setMsgArr] = useState<MessageBodyInterfaceResponse[]>([]);

  useEffect(() => {
    getAllMsgs().then((res: MessageBodyInterfaceResponse[]) => {
      setMsgArr(res);
    });

    if (props.newMsgResponse) {
      // @ts-expect-error - props.newMsgResponse cannot be undefined inside the if statement... ¯\_(ツ)_/¯
      setMsgArr((prev) => [...prev, props.newMsgResponse]);
    }
  }, [props]);

  return (
    <ul className="ul-list m-5">
      {msgArr.map((msg) => (
        <li key={msg.id} className="mt-3">
          <MsgBox msg={msg} />
        </li>
      ))}
    </ul>
  );
};

export default MsgMessengerView;
