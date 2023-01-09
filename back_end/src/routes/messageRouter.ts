import { Request, Response, Router } from "express";
import { messageBodySchema } from "../systems/schemas";
import { ValidationError } from "yup";

const msgRouter = Router();

msgRouter.post("/", async (req: Request, res: Response) => {
  try {
    const msgBody = messageBodySchema.validateSync(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    res.send(msgBody);
  } catch (err) {
    const error = err as ValidationError;
    return res.status(422).json({ errors: error.errors });
  }
});

export default msgRouter;
