import { Router } from "express";
import { getUsers, getUserById, postUser, putUser, delUser } from "../controllers/users.controllers.js";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", postUser);
router.put("/users/:id", putUser);
router.delete("/users/:id", delUser); 

export default router;
