import { Router } from "express";
import price from "../controllers/precio_sucursal.controller.js";
import { validatorJWT } from "../middlewares/security.middleware.js"
import { priceDataValidate, priceDataValidateFilter } from "../validations/precio_sucursal.validator.js";

const router = Router();
const routeName = '/price-branch';
router.get(routeName, [priceDataValidateFilter, validatorJWT], price.GETALL)
router.get(`${routeName}/:Id`, validatorJWT, price.GET)
router.post(routeName, [priceDataValidate, validatorJWT], price.POST)
//router.delete(`${routeName}/:Id`, validatorJWT, price.DELETE)

export default router;