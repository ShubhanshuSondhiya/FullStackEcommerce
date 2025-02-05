import { userModel } from "../models/userModel.js";
import bcrypt from "bcrypt";
import { generateToken } from "../services/tokenGenerate.js";

export async function registerUser(req, res) {
  try {
    const saltRounds = 10;
    let { firstname, lastname, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new userModel({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      role,
    });
    await user.save();
    res.status(201).json({ message: "Registration successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
}

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email });
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        const token = generateToken(user);
        res
          .cookie("auth_token", token, {
            httpOnly: true,
            secure: false,
            sameSize: "none",
            maxAge: 3600000,
          })
          .status(200)
          .json({ message: "Login Successful" });
      } else {
        res.status(401).json({ error: "Incorrect password" });
      }
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
}

export async function logoutUser(req, res) {
  try {
    res.clearCookie("auth_token", {
      httpOnly: true,
      secure: false,
      sameSize: "none",
    });
    res.status(200).json({ message: "Logout Successfull" });
  } catch (error) {
    res.status(500).json({ error: "Error" });
  }
}
