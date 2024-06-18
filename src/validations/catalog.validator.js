import { query, param } from "express-validator";
import { lastDateSincroValidate } from "./lastDateSincro.validator.js"

export const catalogParamValidateFilter = [
    param('Catalog')
        .isIn(["clase", "subclase", "empaque", "moneda", "proveedor", "tipo_precio", "unidad"]),
    query('ultimaFechaSincro')
        .custom((value, { req }) => {
            return lastDateSincroValidate(value, {req})
        }),
];