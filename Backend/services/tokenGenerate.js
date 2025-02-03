import jwt from "jsonwebtoken";
import "dotenv/config";
import { generateCrypto } from "../utils/generateRandomCrypto.js";

export function generateToken(user) {
  return jwt.sign(
    {
      userID: user._id,
      userEmail: user.email,
      isVerified: true,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1hr" }
  );
}
