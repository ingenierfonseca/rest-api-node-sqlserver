import { Router } from "express";
import { get, auth } from "../controllers/auth.controllers.js";

const router = Router();

router.get('/auth', get)
router.post('/auth', auth)

export default router;