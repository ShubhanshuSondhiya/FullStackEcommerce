import express, { Router } from "express";
import userRouter from "./userRouter.js";
import productRouter from "./productRouter.js";
import adminRouter from "./adminRouter.js";

const routes = express.Router();
routes.use("/user", userRouter);
routes.use("/admin", adminRouter);
routes.use("/product", productRouter);

export default routes;
