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
  }, []);

  useEffect(() => {
    const newMsg = props.newMsgResponse;
    if (newMsg) {
      setMsgArr((prev) => [...prev, newMsg]);
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
