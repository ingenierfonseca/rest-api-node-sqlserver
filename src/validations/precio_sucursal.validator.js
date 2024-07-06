import { body, query } from "express-validator";
import { lastDateSincroValidate } from "./lastDateSincro.validator.js";

export const priceDataValidate = [
    body("Id")
      .optional()
      .isNumeric()
      .withMessage("Id should be number"),
    body("AgenciaId")
      .exists({ checkFalsy: true })
      .withMessage("AgenciaId is required")
      .isNumeric()
      .withMessage("AgenciaId should be number"),
    body("TipoPrecioId")
      .exists({ checkFalsy: true })
      .withMessage("TipoPrecioId is required")
      .isNumeric()
      .withMessage("TipoPrecioId should be number"),
    body("ProductoId")
      .exists({ checkFalsy: true })
      .withMessage("ProductoId is required")
      .isNumeric()
      .withMessage("ProductoId should be number"),
    body("MonedaId")
      .exists({ checkFalsy: true })
      .withMessage("MonedaId is required")
      .isNumeric()
      .withMessage("MonedaId should be number"),
    body("Precio")
      .exists({ checkFalsy: true })
      .withMessage("Precio is required")
      .isNumeric()
      .withMessage("Precio should be number"),
    body("Activo")
      .optional()
      .isBoolean()
      .withMessage("Precio should be boolean"),
  ];

export const priceDataValidateFilter = [
    query('filter').custom((value, { req }) => {
        if (value != undefined && !req.query.keyword) {
            throw new Error('keyword is required');
        }

        if (value !== undefined) {
          if (value !== 'codigo' && value !== 'descripcion' && value !== 'regproveedor') {
            throw new Error('filter invalid value');
          }
        }
        return true;
      }),
    query('keyword').custom((value, { req }) => {
        if (value != undefined && !req.query.filter) {
            throw new Error('filter is required');
        }
        if (req.query.filter && req.query.filter === 'regproveedor') {
            if (!value || isNaN(value)) {
              throw new Error('It must be a number');
            }
          }
        return true;
      }),
    query('limit')
        .isNumeric()
        .withMessage('It must be Integer'),
    query('page')
        .isNumeric()
        .withMessage('It must be Integer'),
    query('fechaSincro')
        .custom((value, { req }) => {
            return lastDateSincroValidate(value, {req})
        }),
];