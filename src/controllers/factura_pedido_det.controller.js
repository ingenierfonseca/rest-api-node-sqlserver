import { validationResult } from "express-validator";
import FacturaPedidoDet from "../models/factura_pedido_det.model.js";
import { getFacturaPedidoDet, getFacturaPedidosDet, deleteFacturaPedidoDet, createFacturaPedidoDet, updateFacturaPedidoDet } from "../repositories/factura_pedido_det.repository.js";
import { getProduct } from "../repositories/product.repository.js";
import { getFacturaPedido } from "../repositories/factura_pedido.repository.js";


const POST = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors:  errors['errors']})
    }

    const {
        Id,
        PedidoID,
        ProductoID,
        Cantidad,
        Precio,
        SubTotal,
        IGV,
        Total
    } = req.body;

    const productModel = new FacturaPedidoDet({
        Id: Id,
        PedidoID: PedidoID,
        ProductoID: ProductoID,
        Cantidad: Cantidad,
        Precio: Precio,
        SubTotal: SubTotal,
        IGV: IGV,
        Total: Total
    })

    try {
        const resultProduct = await getProduct(ProductoID);
        if (resultProduct == null) {
            return res.status(400).json({ message: 'ProductoID invalid Param' })
        }

        const resultPedido = await getFacturaPedido(PedidoID);
        if (resultPedido == null) {
            return res.status(400).json({ message: 'PedidoID invalid Param' })
        }

        if (Id === undefined || Id === 0) {
            const result = await createFacturaPedidoDet(productModel);
            return res.json({
                success: true,
                result
            })
        } else {
            const result = await updateFacturaPedidoDet(productModel);

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
        const result = await getFacturaPedidosDet(filter, keyword, parseInt(page), parseInt(limit), orderBy, sortBy, fechaSincro);

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
        const result = await getFacturaPedidoDet(Id);

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
        const result = await deleteFacturaPedidoDet(Id);

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