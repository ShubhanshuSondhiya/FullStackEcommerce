import express from "express";
import { loginUser, registerUser } from "../controllers/ecomController.js";

const ecomRouter = express.Router();

ecomRouter.post("/user/register", registerUser);
ecomRouter.post("/user/login", loginUser);

export default ecomRouter;
