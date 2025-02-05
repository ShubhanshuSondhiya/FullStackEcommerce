import express from "express";
import { getProducts } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/products", getProducts);
productRouter.post("/cart");
productRouter.post("/checkout");

export default productRouter;