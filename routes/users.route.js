import { Router } from "express";
import { getUsers, getUserById, postUser, putUser, delUser } from "../controllers/users.controllers.js";
import { validateJWT } from "../utils/jwt.js";

const router = Router();

router.get("/users", validateJWT, getUsers);
router.get("/users/:id", validateJWT, getUserById);
router.post("/users", validateJWT, postUser);
router.put("/users/:id", validateJWT, putUser);
router.delete("/users/:id", validateJWT, delUser);

export default router;
