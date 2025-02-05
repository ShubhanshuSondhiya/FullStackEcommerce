import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { adminModel } from "../models/adminModel.js";

class AdminController {
  static async login(req, res) {
    const { email, password } = req.body;
    try {
      const admin = await adminModel.findOne({ email });
      if (!admin) {
        return res.status(401).json({ msg: "Invalid credentials" });
      }
      // Compare hashed password
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
        return res.status(401).json({ msg: "Invalid credentials" });
      }
      // Generate JWT Token
      const token = jwt.sign(
        { id: admin._id, role: "admin" },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "Strict",
        maxAge: 3600000, // 1 hour
      });
      res.json({ msg: "Login successful" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Server error" });
    }
  }
  static async getDashboard(req, res) {}
  static async addProduct(req, res) {}
  static async deleteProduct(req, res) {}
}

export default AdminController;
