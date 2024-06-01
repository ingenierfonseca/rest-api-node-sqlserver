import { validationResult } from "express-validator";
import { getProducts, getProduct, deleteProduct, createProduct } from "../repositories/product.repository.js";
import Product from "../models/product.model.js";
import { getClase, getEmpaque, getProveedor, getSubClase, getUnidad } from "../repositories/catalogo.repository.js";


const POST = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors:  errors['errors']})
    }

    const { 
        Id,
        Codigo,
        Descripcion,
        IdClase,
        IdSubClase,
        IdUnidad,
        IdEmpaque,
        Proveedor,
        PrecioCostoUSD,
        PrecioCostoCOR,
        pvpc,
        pvdc,
        pvpu,
        pvdu,
        Impuesto,
        IdEstado,
        PrecioMinimoVenta,
        PrecioVentaDistribuidor,
        PrecioVentaPublico,
        PrecioMinimoVentaUSD,
        PrcPrecioMinimoVenta
    } = req.body;

    const productModel = new Product({
        Id : Id,
        Codigo: Codigo,
        Descripcion: Descripcion,
        IdClase: IdClase,
        IdSubClase: IdSubClase,
        IdUnidad: IdUnidad,
        IdEmpaque: IdEmpaque,
        Proveedor: Proveedor,
        PrecioCostoUSD: PrecioCostoUSD,
        PrecioCostoCOR: PrecioCostoCOR,
        pvpc: pvpc,
        pvdc: pvdc,
        pvpu: pvpu,
        pvdu: pvdu,
        Impuesto: Impuesto,
        IdEstado: IdEstado,
        PrecioMinimoVenta: PrecioMinimoVenta,
        PrecioVentaDistribuidor: PrecioVentaDistribuidor,
        PrecioVentaPublico: PrecioVentaPublico,
        PrecioMinimoVentaUSD: PrecioMinimoVentaUSD,
        PrcPrecioMinimoVenta: PrcPrecioMinimoVenta
    })

    try {
        const resultClase = await getClase(IdClase);
        if (resultClase == null) {
            return res.status(400).json({ message: 'IdClase invalid Param' })
        }

        const resultSubClase = await getSubClase(IdSubClase);
        if (resultSubClase == null) {
            return res.status(400).json({ message: 'IdSubClase invalid Param' })
        }

        const resultEmpaque = await getEmpaque(IdEmpaque);
        if (resultEmpaque == null) {
            return res.status(400).json({ message: 'IdEmpaque invalid Param' })
        }

        const resultProveedor = await getProveedor(Proveedor);
        if (resultProveedor == null) {
            return res.status(400).json({ message: 'Proveedor invalid Param' })
        }

        const resultUnidad = await getUnidad(IdUnidad);
        if (resultUnidad == null) {
            return res.status(400).json({ message: 'IdUnidad invalid Param' })
        }

        const result = await createProduct(productModel);

        return res.json({
            success: true,
            result
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const GETALL = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors:  errors['errors']})
    }

    const { filter, keyword, page = 1, limit = 15, orderBy = 'descripcion', sortBy = 'asc' } = req.query;

    const {fechaSincro = 0} = req.query

    try {
        const result = await getProducts(filter, keyword, parseInt(page), parseInt(limit), orderBy, sortBy, fechaSincro);

        return res.json({
            success: true,
            result
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const GET = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors:  errors['errors'] });
    }

    const { Id } = req.params;

    try {
        const result = await getProduct(Id);

        if (result == null) return res.status(400).json({ message: 'Invalid Param' })

        return res.json({
            success: true,
            data: result
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const DELETE = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors:  errors['errors'] });
    }

    const { Id } = req.params;

    try {
        const result = await deleteProduct(Id);

        if (result == 0) return res.status(400).json({ message: 'Invalid Param' })

        return res.json({
            success: true,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export default { POST, GET, GETALL, DELETE };