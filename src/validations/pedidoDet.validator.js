import { body, query } from "express-validator";
import { lastDateSincroValidate } from "./lastDateSincro.validator.js";

export const orderDataValidate = [
    body("DetalleID")
      .optional()
      .isNumeric()
      .withMessage("DetalleID should be number"),
    body("PedidoID")
      .exists({ checkFalsy: true })
      .withMessage("PedidoID is required")
      .isNumeric()
      .withMessage("PedidoID should be number"),
    body("ProductoID")
      .exists({ checkFalsy: true })
      .withMessage("ProductoID is required")
      .isNumeric()
      .withMessage("ProductoID should be number"),
    body("Cantidad")
      .exists({ checkFalsy: true })
      .withMessage("Cantidad is required")
      .isNumeric()
      .withMessage("Cantidad should be number"),
    body("Precio")
      .exists({ checkFalsy: true })
      .withMessage("Precio is required")
      .isNumeric()
      .withMessage("Precio should be number"),
    body("IGV")
      .exists({ checkFalsy: true })
      .withMessage("IGV is required")
      .isNumeric()
      .withMessage("IGV should be number"),
    body("SubTotal")
      .exists({ checkFalsy: true })
      .withMessage("SubTotal is required")
      .isNumeric()
      .withMessage("SubTotal should be number"),
    body("Total")
      .exists({ checkFalsy: true })
      .withMessage("Total is required")
      .isNumeric()
      .withMessage("Total should be number"),
  ];

  const isNumericIncludingZero = (value) => {
    return /^-?\d*\.?\d+$/.test(value);
  };

export const orderDataValidateFilter = [
    query('filter').custom((value, { req }) => {
        if (value != undefined && !req.query.keyword) {
            throw new Error('keyword is required');
        }

        if (value !== undefined) {
          if (value !== 'PedidoID') {
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