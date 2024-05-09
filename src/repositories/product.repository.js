import { Op } from "sequelize"
import Product from "../models/product.model.js"

export const createProduct = async (p) => {
    try {
        const result = await Product.create({
            Id : p.Id,
            Codigo: p.Codigo,
            Descripcion: p.Descripcion,
            IdClase: p.IdClase,
            IdSubClase: p.IdSubClase,
            IdUnidad: p.IdUnidad,
            IdEmpaque: p.IdEmpaque,
            Proveedor: p.Proveedor,
            PrecioCostoUSD: p.PrecioCostoUSD,
            PrecioCostoCOR: p.PrecioCostoCOR,
            pvpc: p.pvpc,
            pvdc: p.pvdc,
            pvpu: p.pvpu,
            pvdu: p.pvdu,
            Impuesto: p.Impuesto,
            IdEstado: p.IdEstado,
            PrecioMinimoVenta: p.PrecioMinimoVenta,
            PrecioVentaDistribuidor: p.PrecioVentaDistribuidor,
            PrecioVentaPublico: p.PrecioVentaPublico,
            PrecioMinimoVentaUSD: p.PrecioMinimoVentaUSD,
            PrcPrecioMinimoVenta: p.PrcPrecioMinimoVenta
        });

        return result;
    } catch(error) {
        console.log(error)
        return -1;
    }
}

export const getProducts = async (filter, keyword, page, limit, orderBy, sortBy) => {
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

        const queries = {
            offset: (page -1) * limit,
            limit
        }

        if (orderBy) {
            queries.order = [[orderBy, sortBy]]
        }

        const data = await Product.findAndCountAll({
            where: query,
            ...queries
                /*page: +page ? +page : 1,
                limit: +limit ? +limit : 3,
                orderBy,
                sortBy,
                keyword*/
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

export const getProduct = async (id) => {
    try {
        const product = await Product.findOne({where: {Id: id}})
        
        return product
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct = async (id) => {
    try {
        const product = await Product.findOne({where: {Id: id}});

        if (product == null) {
            return 0;
        }

        const result = await Product.destroy({where: {Id: id}});
        console.log(result);
        
        return product
    } catch (error) {
        console.log(error)
        return -1;
    }
}