import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import ecomRouter from "./routes/ecomRouter.js";

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api",ecomRouter);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () =>
      console.log("Server is up and Running at port: " + PORT)
    );
  })
  .catch((err) => console.log(err));
