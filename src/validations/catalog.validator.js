import { query, param } from "express-validator";
import { lastDateSincroValidate } from "./lastDateSincro.validator.js"

export const catalogParamValidateFilter = [
    param('Catalog')
        .isIn([
            "agencia", 
            "clase", 
            "subclase", 
            "departamento", 
            "empaque", 
            "moneda", 
            "municipio", 
            "negocio", 
            "proveedor", 
            "tipo_identificacion", 
            "tipo_precio", 
            "unidad",
            "vendedor"
        ]),
    query('fechaSincro')
        .custom((value, { req }) => {
            return lastDateSincroValidate(value, {req})
        }),
];