import express from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/ecomController.js";

const ecomRouter = express.Router();

ecomRouter.post("/user/register", registerUser);
ecomRouter.post("/user/login", loginUser);
ecomRouter.post("/user/logout", logoutUser);

export default ecomRouter;
