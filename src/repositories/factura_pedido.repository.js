import { Op } from "sequelize"
import FacturaPedido from "../models/factura_pedido.model.js";
import { fechaNumeric17, generarFechaFormateadaNum } from "../helpers/utils.js";

export const createFacturaPedido = async (p) => {
    try {
        const id = await getNewId();
        const result = await FacturaPedido.create({
            Id : id,
            NumeroPedido: p.NumeroPedido,
            NumeroFactura: p.NumeroFactura,
            FechaPedidoInt: p.FechaPedidoInt == null ? generarFechaFormateadaNum() : p.FechaPedidoInt,
            FechaPedido: p.FechaPedido,
            FechaIngreso: p.FechaIngreso,
            VendedorID: p.VendedorID,
            Proveedor: p.Proveedor,
            ClienteID: p.ClienteID,
            UsuarioID: p.UsuarioID,
            AgenciaID: p.AgenciaID,
            EstadoID: p.EstadoID,
            FacturaID: p.FacturaID,
            TipoFacturaID: p.TipoFacturaID,
            MonedaID: p.MonedaID,
            UsuarioEstadoID: p.UsuarioEstadoID,
            NombreCliente: p.NombreCliente,
            SubTotal:p.SubTotal,
            SubTotalCosto: p.SubTotalCosto,
            Impuesto: p.Impuesto,
            Retencion:p.Retencion,
            Total:p.Total,
            DiasCredito: p.DiasCredito,
            TipoCambio: p.TipoCambio,
            NumFechaEstado: p.NumFechaEstado,
            FechEstado: p.FechEstado,
            Direccion: p.Direccion,
            FechaSincronizacion: fechaNumeric17()
        });

        return result;
    } catch(error) {
        console.log(error)
        return -1;
    }
}

export const updateFacturaPedido = async (p) => {
    try {
        const [result] = await FacturaPedido.update({
            Id : p.Id,
            NumeroPedido: p.NumeroPedido,
            NumeroFactura: p.NumeroFactura,
            FechaPedidoInt: p.FechaPedidoInt == null ? generarFechaFormateadaNum() : p.FechaPedidoInt,
            FechaPedido: p.FechaPedido,
            FechaIngreso: p.FechaIngreso,
            VendedorID: p.VendedorID,
            Proveedor: p.Proveedor,
            ClienteID: p.ClienteID,
            UsuarioID: p.UsuarioID,
            AgenciaID: p.AgenciaID,
            EstadoID: p.EstadoID,
            FacturaID: p.FacturaID,
            TipoFacturaID: p.TipoFacturaID,
            MonedaID: p.MonedaID,
            UsuarioEstadoID: p.UsuarioEstadoID,
            NombreCliente: p.NombreCliente,
            SubTotal:p.SubTotal,
            SubTotalCosto: p.SubTotalCosto,
            Impuesto: p.Impuesto,
            Retencion:p.Retencion,
            Total:p.Total,
            DiasCredito: p.DiasCredito,
            TipoCambio: p.TipoCambio,
            NumFechaEstado: p.NumFechaEstado,
            FechEstado: p.FechEstado,
            Direccion: p.Direccion,
            FechaSincronizacion: fechaNumeric17()
        }, {
            where: {Id: p.Id}
        });

        if (result > 0) {
            return getFacturaPedido(p.Id);
        }

        return null;
    } catch(error) {
        console.log(error)
        return -1;
    }
}

export const getFacturaPedidos = async (filter, keyword, page, limit, orderBy, sortBy, fechaSincro) => {
    try {
        const query = {}

        if (filter && keyword) {
            if (filter == 'descripcion') {
                query.Descripcion = {[Op.substring]: keyword}
            } else if (filter === 'codigo') {
                query.Codigo = {[Op.substring]: keyword}
            } else if (filter === 'regproveedor') {
                query.Proveedor = {[Op.substring]: keyword}
            }
        }
        
        query.FechaSincronizacion = {[Op.gt]: fechaSincro}

        if (fechaSincro == 0) {
            query.IdEstado = {[Op.gt]: 0}
        }

        const queries = {
            offset: (page -1) * limit,
            limit
        }

        if (orderBy) {
            queries.order = [[orderBy, sortBy]]
        }

        const data = await FacturaPedido.findAndCountAll({
            where: query,
            ...queries,
            loggin: console.log
        });
        
        const res = {
            totalPages: Math.ceil(data?.count / limit),
            totalItems: data?.count,
            data: data?.rows
        }
        return res
    } catch (error) {
        console.log(error)
        return {
            totalPages: 0,
            totalItems: 0,
            data: []
        };
    }
}

const getNewId = async () => {
    try {
        const maxId = await FacturaPedido.max('Id')
        
        return maxId + 1;
    } catch (error) {
        console.log(error)
    }
}

export const getFacturaPedido = async (id) => {
    try {
        const model = await FacturaPedido.findOne({where: {Id: id}})
        
        return model
    } catch (error) {
        console.log(error)
    }
}

export const deleteFacturaPedido = async (id) => {
    try {
        const model = await FacturaPedido.findOne({where: {Id: id}});

        if (model == null) {
            return 0;
        }

        await FacturaPedido.destroy({where: {Id: id}});
        
        return model
    } catch (error) {
        console.log(error)
        return -1;
    }
}