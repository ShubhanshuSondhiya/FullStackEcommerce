import express from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/user/register", registerUser);
userRouter.post("/user/login", loginUser);
userRouter.post("/user/logout", logoutUser);

export default userRouter;
