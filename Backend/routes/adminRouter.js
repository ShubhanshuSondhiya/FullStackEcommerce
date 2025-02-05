import express from "express";
import AdminController from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.post("/login", AdminController.login);

export default adminRouter;
