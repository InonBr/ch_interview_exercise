import { Request, Response, Router } from "express";
import { messageBodySchema } from "../systems/schemas";
import { ValidationError } from "yup";
import { sendMsg } from "../systems/twilio";
import { createNewMsg, getAllMsgs } from "repositories/messages";

const msgRouter = Router();

msgRouter.post("/", async (req: Request, res: Response) => {
  try {
    const msgBody = messageBodySchema.validateSync(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    await sendMsg(msgBody);
    const { message, phoneNumber } = msgBody;
    const { date, id } = await createNewMsg({ message, phoneNumber });

    res.send({ ...msgBody, date, id });
  } catch (err: any) {
    console.error(err);

    if (!(err instanceof ValidationError)) {
      return res.status(500).json({ msg: err.message });
    }

    const error = err as ValidationError;
    return res.status(422).json({ errors: error.errors });
  }
});

msgRouter.get("/", async (req: Request, res: Response) => {
  try {
    const messages = await getAllMsgs();

    res.send(
      messages.map(({ _id, date, message, phoneNumber }) => ({
        id: _id.toString(),
        date,
        message,
        phoneNumber,
      }))
    );
  } catch (err: any) {
    console.error(err);
    res.status(500).send({ msg: err.message });
  }
});

export default msgRouter;
