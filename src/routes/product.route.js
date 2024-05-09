import { Router } from "express";
import product from "../controllers/product.controller.js";
import { validatorJWT } from "../middlewares/security.middleware.js"
import { productDataValidate, productDataValidateFilter } from "../validations/product.validator.js";

const router = Router();
const routeName = '/product';
router.get(routeName, [productDataValidateFilter, validatorJWT], product.GETALL)
router.get(`${routeName}/:Id`, validatorJWT, product.GET)
router.post(routeName, [productDataValidate, validatorJWT], product.POST)
//router.put(routeName, validatorJWT, findUser)
router.delete(`${routeName}/:Id`, validatorJWT, product.DELETE)

export default router;