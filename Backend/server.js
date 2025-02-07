import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import routes from "./routes/index.js";
import cookieParser from "cookie-parser";

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ error: "Internal Server Error" });
});
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () =>
      console.log("Server is up and Running at port: " + PORT)
    );
  })
  .catch((err) => console.log(err));
