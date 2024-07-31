import { Router } from "express";
import catalog from "../controllers/catalogos.controller.js";
import { validatorJWT } from "../middlewares/security.middleware.js"
import { catalogParamValidateFilter } from "../validations/catalog.validator.js";

const router = Router();
const routeName = '/catalogs';
router.get(`${routeName}/:Catalog`, [catalogParamValidateFilter, validatorJWT], catalog.GETALL)
router.get(`${routeName}/agencia-usuario/:Id`, validatorJWT, catalog.GETAGENCIAUSUARIO)
router.get(`${routeName}/facturas-usuario/:Id`, validatorJWT, catalog.GETFACTURAUSUARIO)

export default router;