import jwt from "jsonwebtoken";
import { Router } from "express";

export const validateJWT = Router();

validateJWT.use((req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ msg: "Access denied. No token provided." });
  }

  token = token && token.split(" ")[1]; // Expected: "Bearer <token>"

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ msg: "Invalid or expired token." });
    }
    req.user = decoded;
    next();
  });
});
