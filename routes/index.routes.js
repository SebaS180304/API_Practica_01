import { Router } from "express";
import { holaMundo, ping, abc } from "../controllers/index.controllers.js";

const router = Router();

router.get("/", holaMundo);
router.get("/ping", ping);
router.get("/a/b/c", abc);

export default router;
