import { Router } from "express";
import catalog from "../controllers/catalogos.controller.js";
import { validatorJWT } from "../middlewares/security.middleware.js"
import { catalogParamValidateFilter } from "../validations/catalog.validator.js";

const router = Router();
const routeName = '/catalogs';
router.get(`${routeName}/:Catalog`, [catalogParamValidateFilter, validatorJWT], catalog.GETALL)

export default router;