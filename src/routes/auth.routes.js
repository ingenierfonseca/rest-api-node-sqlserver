import { Router } from "express";
import { get, auth, findUser, configuration } from "../controllers/auth.controllers.js";
import { validatorJWT } from "../middlewares/security.middleware.js"

const router = Router();

router.get('/auth', get)
router.post('/auth', auth)
router.get('/auth/user/:Code', validatorJWT, findUser)
router.get('/auth/configuration/:Id', validatorJWT, configuration)

export default router;