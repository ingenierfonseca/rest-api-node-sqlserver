import { body, query } from "express-validator";
import { lastDateSincroValidate } from "./lastDateSincro.validator.js";

export const productDataValidate = [
    body("Id")
      .optional()
      .isNumeric()
      .withMessage("Id should be number"),
    body("Codigo")
      .exists({ checkFalsy: true })
      .withMessage("Codigo is required")
      .isString()
      .withMessage("Codigo should be string")
      .isLength({max: 50})
      .withMessage('Codigo max length is 50'),
    body("Descripcion")
      .exists({ checkFalsy: true })
      .withMessage("Descripcion is required")
      .isString()
      .withMessage("Descripcion should be string")
      .isLength({max: 600})
      .withMessage('Descripcion max length is 600'),
    body("IdClase")
      .exists({ checkFalsy: true })
      .withMessage("IdClase is required")
      .isNumeric()
      .withMessage("IdClase should be number"),
    body("IdSubClase")
      .exists({ checkFalsy: true })
      .withMessage("IdSubClase is required")
      .isNumeric()
      .withMessage("IdSubClase should be number"),
    body("IdUnidad")
      .exists({ checkFalsy: true })
      .withMessage("IdUnidad is required")
      .isNumeric()
      .withMessage("IdUnidad should be number"),
    body("IdEmpaque")
      .exists({ checkFalsy: true })
      .withMessage("IdEmpaque is required")
      .isNumeric()
      .withMessage("IdEmpaque should be number"),
    body("Proveedor")
      .exists({ checkFalsy: true })
      .withMessage("Proveedor is required")
      .isNumeric()
      .withMessage("Proveedor should be number"),
    body('Impuesto')
        .custom((value, { req }) => {
            if (!req.body.Impuesto && req.body.Impuesto !== 0) {
                throw new Error('Impuesto is required');
            }
            if (!isNumericIncludingZero(value)) {
            throw new Error('Impuesto should be number');
            }
        
            return true;
        }),
    body('IdEstado')
        .custom((value, { req }) => {
            if (!req.body.IdEstado && req.body.IdEstado !== 0) {
                throw new Error('IdEstado is required');
            }
            if (!isNumericIncludingZero(value)) {
            throw new Error('IdEstado should be number');
            }
        
            return true;
        }),
  ];

  const isNumericIncludingZero = (value) => {
    return /^-?\d*\.?\d+$/.test(value);
  };

export const productDataValidateFilter = [
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