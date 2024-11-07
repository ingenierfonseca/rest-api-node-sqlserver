import { validationResult } from "express-validator";
import FacturaPedido from "../models/factura_pedido.model.js";
import { getAgencia, getClase, getEmpaque, getMoneda, getProveedor, getSubClase, getUnidad, getVendedor } from "../repositories/catalogo.repository.js";
import { getFacturaPedido, getFacturaPedidos, deleteFacturaPedido, createFacturaPedido, updateFacturaPedido } from "../repositories/factura_pedido.repository.js";
import { getClient } from "../repositories/client.repository.js";


const POST = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors:  errors['errors']})
    }

    const {
        Id,
        NumeroPedido,
        NumeroFactura,
        FechaPedidoInt,
        FechaPedido,
        FechaIngreso,
        VendedorID,
        ClienteID,
        UsuarioID,
        AgenciaID,
        EstadoID,
        FacturaID,
        TipoFacturaID,
        MonedaID,
        UsuarioEstadoID,
        NombreCliente,
        SubTotal,
        Impuesto,
        Retencion,
        Total,
        DiasCredito,
        TipoCambio,
        NumFechaEstado
    } = req.body;

    const productModel = new FacturaPedido({
        Id: Id,
        NumeroPedido: NumeroPedido,
        NumeroFactura: NumeroFactura,
        FechaPedidoInt: FechaPedidoInt,
        FechaPedido: FechaPedido,
        FechaIngreso: FechaIngreso,
        VendedorID: VendedorID,
        ClienteID: ClienteID,
        UsuarioID: UsuarioID,
        AgenciaID: AgenciaID,
        EstadoID: EstadoID,
        FacturaID: FacturaID,
        TipoFacturaID: TipoFacturaID,
        MonedaID: MonedaID,
        UsuarioEstadoID: UsuarioEstadoID,
        NombreCliente: NombreCliente,
        SubTotal: SubTotal,
        Impuesto: Impuesto,
        Retencion: Retencion,
        Total: Total,
        DiasCredito: DiasCredito,
        TipoCambio: TipoCambio,
        NumFechaEstado: NumFechaEstado
    })

    try {
        const resultVendedor = await getVendedor(VendedorID);
        if (resultVendedor == null) {
            return res.status(400).json({ message: 'VendedorID invalid Param' })
        }

        const resultCliente = await getClient(ClienteID);
        if (resultCliente == null) {
            return res.status(400).json({ message: 'ClienteID invalid Param' })
        }

        /*const resultUsuario = await getEmpaque(UsuarioID);
        if (resultUsuario == null) {
            return res.status(400).json({ message: 'UsuarioID invalid Param' })
        }*/

        const resultAgencia = await getAgencia(AgenciaID);
        if (resultAgencia == null) {
            return res.status(400).json({ message: 'AgenciaID invalid Param' })
        }

        /*const resultEstado = await getUnidad(EstadoID);
        if (resultEstado == null) {
            return res.status(400).json({ message: 'EstadoID invalid Param' })
        }

        const resultFactura = await getUnidad(FacturaID);
        if (resultFactura == null) {
            return res.status(400).json({ message: 'FacturaID invalid Param' })
        }

        const resultTipoFactura = await getUnidad(TipoFacturaID);
        if (resultTipoFactura == null) {
            return res.status(400).json({ message: 'TipoFacturaID invalid Param' })
        }*/

        const resultMoneda = await getMoneda(MonedaID);
        if (resultMoneda == null) {
            return res.status(400).json({ message: 'MonedaID invalid Param' })
        }

        /*const resultUsuarioEstado = await getMoneda(UsuarioEstadoID);
        if (resultUsuarioEstado == null) {
            return res.status(400).json({ message: 'UsuarioEstadoID invalid Param' })
        }*/

        if (Id === undefined || Id === 0) {
            const result = await createFacturaPedido(productModel);
            return res.json({
                success: true,
                result
            })
        } else {
            const result = await updateFacturaPedido(productModel);

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
        const result = await getFacturaPedidos(filter, keyword, parseInt(page), parseInt(limit), orderBy, sortBy, fechaSincro);

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
        const result = await getFacturaPedido(Id);

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
        const result = await deleteFacturaPedido(Id);

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