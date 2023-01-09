import dotenv from "dotenv";
import { MsgDataInterface } from "./utils";
import { Twilio } from "twilio";

dotenv.config();

const accountSid = process.env.ACCOUNT_SID ? process.env.ACCOUNT_SID : "";
const authToken = process.env.AUTH_TOKEN ? process.env.AUTH_TOKEN : "";
const twilioNumber = process.env.TWILIO_NUMBER ? process.env.TWILIO_NUMBER : "";

export const sendMsg = async (msgData: Omit<MsgDataInterface, "date">) => {
  try {
    const { phoneNumber, message } = msgData;
    const client = new Twilio(accountSid, authToken);

    const sid = await client.messages.create({
      body: message,
      from: twilioNumber,
      to: phoneNumber,
    });

    console.log(sid);
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`sendMsgError ${err.message}`);
    }
  }
};
