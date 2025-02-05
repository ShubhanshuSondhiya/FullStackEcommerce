import jwt from "jsonwebtoken";
import { adminModel } from "../models/adminModel.js";

class AdminController {
  static async login(req, res) {
    const { email, password } = req.body;

  }
  static async getDashboard(req, res) {}
  static async addProduct(req, res) {}
  static async deleteProduct(req, res) {}
}

export default AdminController;
