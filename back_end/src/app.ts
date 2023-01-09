import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/db";
import msgRouter from "./routes/messageRouter";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api", msgRouter);

connectDB().then(() => {
  console.log("🔵 MongoDB connected...");
  app.listen(port, () => {
    console.log(`🟢 App listening at http://localhost:${port}`);
  });
});
