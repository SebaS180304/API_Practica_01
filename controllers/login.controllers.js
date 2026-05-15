import jwt from "jsonwebtoken";
import User from "../models/users.model.js";
import { verifyPassword } from "../utils/hashing.js";
import { hashPassword } from "../utils/hashing.js";

export const login = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
        return res.status(401).json({ login: false, msg: "Unauthorized.", user:{}, token:"" });
    }

    const salt = user.password.substring(0, process.env.SALT_SIZE);
    const hashed = hashPassword(password, salt);

    if (!verifyPassword(password, user.password)) {
        return res.status(401).json({ login: false, msg: "Unauthorized.", user:{}, token:"" });
    } else {
        const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ login: true, msg: "OK", user:user, token });
    }
};