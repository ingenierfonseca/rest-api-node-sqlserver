import { Router } from "express";
import order from "../controllers/factura_pedido.controller.js";
import { validatorJWT } from "../middlewares/security.middleware.js"
import { orderDataValidate, orderDataValidateFilter } from "../validations/pedido.validator.js";

const router = Router();
const routeName = '/order';
router.get(routeName, [orderDataValidateFilter, validatorJWT], order.GETALL)
router.get(`${routeName}/:Id`, validatorJWT, order.GET)
router.post(routeName, [orderDataValidate, validatorJWT], order.POST)
router.delete(`${routeName}/:Id`, validatorJWT, order.DELETE)

export default router;