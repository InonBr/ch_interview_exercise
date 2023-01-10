import MessageData from "@models/MessageData";

export const createNewMsg = async (newMsgData: {
  message: string;
  phoneNumber: string;
}) => {
  const { message, phoneNumber } = newMsgData;

  const newMessageData = new MessageData({
    message,
    phoneNumber,
  });

  await newMessageData.save();

  const { _id, date } = newMessageData;

  return { id: _id.toString(), date };
};
