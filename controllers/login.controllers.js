import User from "../models/users.model.js";

export const login = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne(
        { username: username })
        if (user.password == password) {
            res.json({ login: true, msg: "OK", user: user });
        } else {
            res.status(401).json({ login: false, msg: "Unauthorized", user: {} });
        }
}