import { body, query } from "express-validator";
import { lastDateSincroValidate } from "./lastDateSincro.validator.js";

export const clientDataValidate = [
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
    body("Nombre")
      .exists({ checkFalsy: true })
      .withMessage("Nombre is required")
      .isString()
      .withMessage("Nombre should be string")
      .isLength({max: 200})
      .withMessage('Nombre max length is 200'),
    body("Identificacion")
      .exists({ checkFalsy: true })
      .withMessage("Identificacion is required")
      .isString()
      .withMessage("Identificacion should be string")
      .isLength({max: 200})
      .withMessage('Identificacion max length is 200'),
    body("Direccion")
      .exists({ checkFalsy: true })
      .withMessage("Direccion is required")
      .isString()
      .withMessage("Direccion should be string")
      .isLength({max: 5000})
      .withMessage('Direccion max length is 5000'),
    body("Telefono")
      .exists({ checkFalsy: true })
      .withMessage("Telefono is required")
      .isString()
      .withMessage("Telefono should be string")
      .isLength({max: 30})
      .withMessage('Telefono max length is 30'),
    body("Fax")
      .optional()
      .isString()
      .withMessage("Fax should be string")
      .isLength({max: 30})
      .withMessage('Fax max length is 30'),
    body("Correo")
      .exists({ checkFalsy: true })
      .withMessage("Correo is required")
      .isEmail()
      .withMessage("Correo should be email")
      .isLength({max: 30})
      .withMessage('Correo max length is 30'),
    body("Negocio")
      .optional()
      .isString()
      .withMessage("Negocio should be string")
      .isLength({max: 50})
      .withMessage('Negocio max length is 50'),
    body("DireccionNegocio")
      .optional()
      .isString()
      .withMessage("DireccionNegocio should be string")
      .isLength({max: 80})
      .withMessage('DireccionNegocio max length is 80'),
    body("Contacto1")
      .optional()
      .isString()
      .withMessage("Contacto1 should be string")
      .isLength({max: 50})
      .withMessage('Contacto1 max length is 50'),
    body("Contacto2")
      .optional()
      .isString()
      .withMessage("Contacto2 should be string")
      .isLength({max: 50})
      .withMessage('Contacto2 max length is 50'),
    body("Limite")
      .optional()
      .isNumeric()
      .withMessage("Limite should be number"),
    body("Saldo")
      .optional()
      .isNumeric()
      .withMessage("Saldo should be number"),
    body("DiasCredito")
      .optional()
      .isNumeric()
      .withMessage("DiasCredito should be number"),
    body("CTAContable")
      .optional()
      .isString()
      .withMessage("CTAContable should be string")
      .isLength({max: 16})
      .withMessage('CTAContable max length is 16'),
    body("Estado")
      .optional()
      .isNumeric()
      .withMessage("Estado should be number"),
    body("SaldoAFavor")
      .optional()
      .isNumeric()
      .withMessage("SaldoAFavor should be number"),
    body("SaldoUSD")
      .optional()
      .isNumeric()
      .withMessage("SaldoUSD should be number"),
    body("IdTipoCliente")
      .exists({ checkFalsy: true })
      .withMessage("IdTipoCliente is required")
      .isNumeric()
      .withMessage("IdTipoCliente should be number"),
    body("IdTipoId")
      .exists({ checkFalsy: true })
      .withMessage("IdTipoId is required")
      .isNumeric()
      .withMessage("IdTipoId should be number"),
    body("NegRegistro")
      .exists()
      .withMessage("NegRegistro is required")
      .notEmpty()
      .withMessage('NegRegistro should not be empty')
      .isNumeric()
      .withMessage("NegRegistro should be number"),
    body("VendREgistro")
      .exists({ checkFalsy: true })
      .withMessage("VendREgistro is required")
      .isNumeric()
      .withMessage("VendREgistro should be number"),
    body("DepRegistro")
      .exists({ checkFalsy: true })
      .withMessage("DepRegistro is required")
      .isNumeric()
      .withMessage("DepRegistro should be number"),
    body("MunRegistro")
      .exists({ checkFalsy: true })
      .withMessage("MunRegistro is required")
      .isNumeric()
      .withMessage("MunRegistro should be number"),
    /*body('Impuesto')
        .custom((value, { req }) => {
            if (!req.body.Impuesto && req.body.Impuesto !== 0) {
                throw new Error('Impuesto is required');
            }
            if (!isNumericIncludingZero(value)) {
            throw new Error('Impuesto should be number');
            }
        
            return true;
        })*/
  ];

  const isNumericIncludingZero = (value) => {
    return /^-?\d*\.?\d+$/.test(value);
  };

export const clientDataValidateFilter = [
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