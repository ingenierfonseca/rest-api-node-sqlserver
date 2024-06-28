import { Op } from "sequelize"
import { fechaNumeric17 } from "../helpers/utils.js";
import PrecioSucursalProducto from "../models/precio_sucursal_producto.model.js";

export const create = async (p) => {
    try {
        const id = await getNewId();
        const result = await PrecioSucursalProducto.create({
            Id: id,
            AgenciaId : p.AgenciaId,
            TipoPrecioId: p.TipoPrecioId,
            ProductoId: p.ProductoId,
            MonedaId: p.MonedaId,
            Precio: p.Precio,
            Activo: true,
            FechaSincronizacion: fechaNumeric17()
        });

        return result;
    } catch(error) {
        console.log(error)
        return -1;
    }
}

export const update = async (p) => {
    try {
        const [result] = await PrecioSucursalProducto.update({
            Id : p.Id,
            AgenciaId : p.AgenciaId,
            TipoPrecioId: p.TipoPrecioId,
            ProductoId: p.ProductoId,
            MonedaId: p.MonedaId,
            Precio: p.Precio,
            Activo: p.Activo,
            FechaSincronizacion: fechaNumeric17()
        }, {
            where: {Id: p.Id}
        });

        if (result > 0) {
            return getPrice(p.Id);
        }

        return null;
    } catch(error) {
        console.log(error)
        return -1;
    }
}

export const getAll = async (filter, keyword, page, limit, orderBy, sortBy, fechaSincro) => {
    try {
        const query = {}

        /*if (filter && keyword) {
            if (filter == 'descripcion') {
                query.Descripcion = {[Op.substring]: keyword}
            } else if (filter === 'codigo') {
                query.Codigo = {[Op.substring]: keyword}
            } else if (filter === 'regproveedor') {
                query.Proveedor = {[Op.substring]: keyword}
            }
        }*/

        query.FechaSincronizacion = {[Op.gt]: fechaSincro}

        const queries = {
            offset: (page -1) * limit,
            limit
        }

        /*if (orderBy) {
            queries.order = [[orderBy, sortBy]]
        }*/

        const data = await PrecioSucursalProducto.findAndCountAll({
            where: query,
            ...queries
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

export const getPrice = async (id) => {
    try {
        const price = await PrecioSucursalProducto
            .findOne({where: {
                Id: id
            }})
        
        return price
    } catch (error) {
        console.log(error)
    }
}

export const getPriceByClustered = async (agenciaId, tipoPrecioId, productoId, monedaId) => {
    try {
        const product = await PrecioSucursalProducto
            .findOne({where: {
                AgenciaId: agenciaId,
                TipoPrecioId: tipoPrecioId,
                ProductoId: productoId,
                MonedaId: monedaId
            }})
        
        return product
    } catch (error) {
        console.log(error)
    }
}

export const getPriceByBranch = async (id) => {
    try {
        const product = await PrecioSucursalProducto.findOne({where: {AgenciaId: id}})
        
        return product
    } catch (error) {
        console.log(error)
    }
}

const getNewId = async () => {
    try {
        const maxId = await PrecioSucursalProducto.max('Id')
        
        return maxId + 1;
    } catch (error) {
        console.log(error)
    }
}