import express from "express";
import AdminController from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.post("/login", AdminController.login);
adminRouter.post("/logout", AdminController.logout);
adminRouter.get("/status", AdminController.LoginStatus);

export default adminRouter;
