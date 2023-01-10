import { MessageBodyInterface } from "./apiInterfaces";
import { baseUrl } from "./urls";
import axios from "axios";

export const createNewMsg = async (
  body: MessageBodyInterface
): Promise<MessageBodyInterface> =>
  await (
    await axios.post(`${baseUrl}`, body)
  ).data;
