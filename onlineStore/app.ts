import * as dotenv from "dotenv";
import express from "express";
import * as bodyParser from "body-parser";
import { orderRouter } from "./routes/orderRouter";

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use("/", orderRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.port}`);
});
