import { Router } from "express";
import { get, auth, findUser, configuration, refreshToken } from "../controllers/auth.controllers.js";
import { validatorJWT } from "../middlewares/security.middleware.js"

const router = Router();

router.get('/auth', get)
router.post('/auth', auth)
router.post('/auth-refresh-token', validatorJWT, refreshToken)
router.get('/auth/user/:Code', validatorJWT, findUser)
router.get('/auth/configuration/:Id', validatorJWT, configuration)

export default router;