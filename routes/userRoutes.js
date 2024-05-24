import { Router } from "express";
import { CreateUser } from "../controllers/UserController.js";

const router = Router();

router.post('/', CreateUser);

export default router;
