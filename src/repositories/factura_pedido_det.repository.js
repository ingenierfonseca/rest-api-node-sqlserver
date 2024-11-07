import { Op } from "sequelize"
import FacturaPedidoDet from "../models/factura_pedido_det.model.js";
import { fechaNumeric17, generarFechaFormateadaNum } from "../helpers/utils.js";

export const createFacturaPedidoDet = async (p) => {
    try {
        const id = await getNewId();
        const result = await FacturaPedidoDet.create({
            DetalleID : id,
            PedidoID: p.PedidoID,
            ProductoID: p.ProductoID,
            FechaVencimientoNum: p.FechaVencimientoNum,
            Cantidad: p.Cantidad,
            Precio: p.Precio,
            IGV: p.IGV,
            SubTotal: p.SubTotal,
            Total: p.Total,
            NumeroLote: p.NumeroLote,
            FechaSincronizacion: fechaNumeric17()
        });

        return result;
    } catch(error) {
        console.log(error)
        return -1;
    }
}

export const updateFacturaPedidoDet = async (p) => {
    try {
        const [result] = await FacturaPedidoDet.update({
            DetalleID : id,
            PedidoID: p.PedidoID,
            ProductoID: p.ProductoID,
            FechaVencimientoNum: p.FechaVencimientoNum,
            Cantidad: p.Cantidad,
            Precio: p.Precio,
            IGV: p.IGV,
            SubTotal: p.SubTotal,
            Total: p.Total,
            NumeroLote: p.NumeroLote,
            FechaSincronizacion: fechaNumeric17()
        }, {
            where: {PedidoID: p.PedidoID, DetalleID: p.DetalleID}
        });

        if (result > 0) {
            return getFacturaPedidoDet(p.Id);
        }

        return null;
    } catch(error) {
        console.log(error)
        return -1;
    }
}

export const getFacturaPedidosDet = async (filter, keyword, page, limit, orderBy, sortBy, fechaSincro) => {
    try {
        const query = {}

        if (filter && keyword) {
            if (filter == 'PedidoID') {
                query.PedidoID = {[Op.substring]: keyword}
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

        const data = await FacturaPedidoDet.findAndCountAll({
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
        const maxId = await FacturaPedidoDet.max('DetalleID')
        
        return maxId + 1;
    } catch (error) {
        console.log(error)
    }
}

export const getFacturaPedidoDet = async (id) => {
    try {
        const model = await FacturaPedidoDet.findOne({where: {Id: id}})
        
        return model
    } catch (error) {
        console.log(error)
    }
}

export const deleteFacturaPedidoDet = async (id) => {
    try {
        const model = await FacturaPedidoDet.findOne({where: {Id: id}});

        if (model == null) {
            return 0;
        }

        await FacturaPedidoDet.destroy({where: {Id: id}});
        
        return model
    } catch (error) {
        console.log(error)
        return -1;
    }
}