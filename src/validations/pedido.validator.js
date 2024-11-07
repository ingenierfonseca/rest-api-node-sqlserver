import { body, query } from "express-validator";
import { lastDateSincroValidate } from "./lastDateSincro.validator.js";

export const orderDataValidate = [
    body("Id")
      .optional()
      .isNumeric()
      .withMessage("Id should be number"),
    body("NumeroPedido")
      .exists({ checkFalsy: true })
      .withMessage("NumeroPedido is required")
      .isString()
      .withMessage("NumeroPedido should be string")
      .isLength({max: 50})
      .withMessage('NumeroPedido max length is 50'),
    body("NumeroFactura")
      .exists({ checkFalsy: true })
      .withMessage("NumeroFactura is required")
      .isString()
      .withMessage("NumeroFactura should be string")
      .isLength({max: 600})
      .withMessage('NumeroFactura max length is 600'),
    body("VendedorID")
      .exists({ checkFalsy: true })
      .withMessage("VendedorID is required")
      .isNumeric()
      .withMessage("VendedorID should be number"),
    body("ClienteID")
      .exists({ checkFalsy: true })
      .withMessage("ClienteID is required")
      .isNumeric()
      .withMessage("ClienteID should be number"),
    body("UsuarioID")
      .exists({ checkFalsy: true })
      .withMessage("UsuarioID is required")
      .isNumeric()
      .withMessage("UsuarioID should be number"),
    body("AgenciaID")
      .exists({ checkFalsy: true })
      .withMessage("AgenciaID is required")
      .isNumeric()
      .withMessage("AgenciaID should be number"),
    body("EstadoID")
      .exists({ checkFalsy: true })
      .withMessage("EstadoID is required")
      .isNumeric()
      .withMessage("EstadoID should be number"),
    body("FacturaID")
      .exists({ checkFalsy: true })
      .withMessage("FacturaID is required")
      .isNumeric()
      .withMessage("FacturaID should be number"),
    body("TipoFacturaID")
      .exists({ checkFalsy: true })
      .withMessage("TipoFacturaID is required")
      .isNumeric()
      .withMessage("TipoFacturaID should be number"),
    body("MonedaID")
      .exists({ checkFalsy: true })
      .withMessage("MonedaID is required")
      .isNumeric()
      .withMessage("MonedaID should be number"),
    body("UsuarioEstadoID")
      .exists({ checkFalsy: true })
      .withMessage("UsuarioEstadoID is required")
      .isNumeric()
      .withMessage("UsuarioEstadoID should be number"),
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
    body('EstadoID')
        .custom((value, { req }) => {
            if (!req.body.EstadoID && req.body.EstadoID !== 0) {
                throw new Error('EstadoID is required');
            }
            if (!isNumericIncludingZero(value)) {
            throw new Error('EstadoID should be number');
            }
        
            return true;
        }),
    body("NombreCliente")
        .exists({ checkFalsy: true })
        .withMessage("NombreCliente is required")
        .isString()
        .withMessage("NombreCliente should be string"),
    body("SubTotal")
        .exists({ checkFalsy: true })
        .withMessage("SubTotal is required")
        .isDecimal()
        .withMessage("SubTotal should be decimal"),
    body("Retencion")
        .custom((value, { req }) => {
            if (!req.body.Retencion && req.body.Retencion !== 0) {
                throw new Error('Retencion is required');
            }
            if (!isNumericIncludingZero(value)) {
            throw new Error('Retencion should be number');
            }
        
            return true;
        }),
    body("Total")
        .custom((value, { req }) => {
            if (!req.body.Total && req.body.Total !== 0) {
                throw new Error('Total is required');
            }
            if (!isNumericIncludingZero(value)) {
            throw new Error('Total should be number');
            }
        
            return true;
        }),
    body("DiasCredito")
        .custom((value, { req }) => {
            if (!req.body.DiasCredito && req.body.DiasCredito !== 0) {
                throw new Error('DiasCredito is required');
            }
            if (!isNumericIncludingZero(value)) {
            throw new Error('DiasCredito should be number');
            }
        
            return true;
        }),
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