import { productModel } from "../models/productModel.js";

export async function getProducts(req, res) {
  try {
    const products = await productModel.find();
    res.status(200).json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Server Error" });
  }
}
