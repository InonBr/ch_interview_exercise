import {
  MessageBodyInterface,
  MessageBodyInterfaceResponse,
} from "./apiInterfaces";
import { baseUrl } from "./urls";
import axios from "axios";

export const createNewMsg = async (
  body: MessageBodyInterface
): Promise<MessageBodyInterfaceResponse> =>
  await (
    await axios.post(`${baseUrl}`, body)
  ).data;
