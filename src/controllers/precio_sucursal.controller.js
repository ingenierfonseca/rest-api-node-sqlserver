import { validationResult } from "express-validator";
import PrecioSucursalProducto from "../models/precio_sucursal_producto.model.js";
import { getAgencia, getMoneda, getTipoPrecio } from "../repositories/catalogo.repository.js";
import { getProduct } from "../repositories/product.repository.js";
import { create, getAll, getPrice, getPriceByClustered, update } from "../repositories/precio_sucursal.repository.js";


const POST = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors:  errors['errors']})
    }

    const {
        Id,
        AgenciaId,
        TipoPrecioId,
        ProductoId,
        MonedaId,
        Precio,
        Activo = true
    } = req.body;

    const priceModel = new PrecioSucursalProducto({
        Id: Id,
        AgenciaId : AgenciaId,
        TipoPrecioId: TipoPrecioId,
        ProductoId: ProductoId,
        MonedaId: MonedaId,
        Precio: Precio,
        Activo: Activo
    })

    try {
        const resultAgencia = await getAgencia(AgenciaId);
        if (resultAgencia == null) {
            return res.status(400).json({ message: 'AgenciaId invalid Param' })
        }

        const resultTipoPrecio = await getTipoPrecio(TipoPrecioId);
        if (resultTipoPrecio == null) {
            return res.status(400).json({ message: 'TipoPrecioId invalid Param' })
        }

        const resultProduct = await getProduct(ProductoId);
        if (resultProduct == null) {
            return res.status(400).json({ message: 'ProductoId invalid Param' })
        }

        const resultMoneda = await getMoneda(MonedaId);
        if (resultMoneda == null) {
            return res.status(400).json({ message: 'MonedaId invalid Param' })
        }

        const resultClustered =  await getPriceByClustered(AgenciaId, TipoPrecioId, ProductoId, MonedaId);
        if (resultClustered != null && Id === undefined) {
            return res.status(400).json({ message: 'Data already exist' })
        }

        if (Id === undefined) {
            const result = await create(priceModel);
            return res.json({
                success: true,
                result
            })
        } else {
            const result = await update(priceModel);

            if (result == null) return res.status(400).json({ message: 'Id invalid Param' })

            return res.json({
                success: true,
                result
            })
        }
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

    const { filter, keyword, page = 1, limit = 15, orderBy = 'FechaSincronizacion', sortBy = 'asc' } = req.query;

    const {fechaSincro = 0} = req.query

    try {
        const result = await getAll(filter, keyword, parseInt(page), parseInt(limit), orderBy, sortBy, parseInt(fechaSincro));

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
        const result = await getPrice(Id);

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
    /*const errors = validationResult(req);
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
    }*/
}

export default { POST, GET, GETALL, DELETE };