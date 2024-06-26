import { validationResult } from "express-validator";
import PrecioSucursalProducto from "../models/precio_sucursal_producto.model.js";
import { getAgencia, getMoneda, getTipoPrecio } from "../repositories/catalogo.repository.js";
import { getProduct } from "../repositories/product.repository.js";
import { create, getAll } from "../repositories/precio_sucursal.repository.js";


const POST = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors:  errors['errors']})
    }

    const {
        AgenciaId,
        TipoPrecioId,
        ProductoId,
        MonedaId,
        Precio,
    } = req.body;

    const precioModel = new PrecioSucursalProducto({
        AgenciaId: AgenciaId,
        TipoPrecioId: TipoPrecioId,
        ProductoId: ProductoId,
        MonedaId: MonedaId,
        Precio: Precio
    })

    try {
        const resultClase = await getAgencia(AgenciaId);
        if (resultClase == null) {
            return res.status(400).json({ message: 'AgenciaId invalid Param' })
        }

        const resultSubClase = await getTipoPrecio(TipoPrecioId);
        if (resultSubClase == null) {
            return res.status(400).json({ message: 'TipoPrecioId invalid Param' })
        }

        const resultEmpaque = await getProduct(ProductoId);
        if (resultEmpaque == null) {
            return res.status(400).json({ message: 'ProductoId invalid Param' })
        }

        const resultProveedor = await getMoneda(MonedaId);
        if (resultProveedor == null) {
            return res.status(400).json({ message: 'MonedaId invalid Param' })
        }

        const result = await create(precioModel);

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

/*const GET = async (req, res) => {
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
}*/

//export default { POST, GET, GETALL, DELETE };
export default { POST, GETALL};