import { Router } from "express";
import client from "../controllers/client.controller.js";
import { validatorJWT } from "../middlewares/security.middleware.js"
import { clientDataValidate, clientDataValidateFilter } from "../validations/client.validator.js";

const router = Router();
const routeName = '/client';
router.get(routeName, [clientDataValidateFilter, validatorJWT], client.GETALL)
router.get(`${routeName}/:Id`, validatorJWT, client.GET)
router.post(routeName, [clientDataValidate, validatorJWT], client.POST)
router.delete(`${routeName}/:Id`, validatorJWT, client.DELETE)

export default router;