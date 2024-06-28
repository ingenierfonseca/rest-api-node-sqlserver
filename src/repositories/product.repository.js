import { Op } from "sequelize"
import Product from "../models/product.model.js"
import { fechaNumeric17 } from "../helpers/utils.js";

export const createProduct = async (p) => {
    try {
        const id = await getNewId();
        const result = await Product.create({
            Id : id,
            Codigo: p.Codigo,
            Descripcion: p.Descripcion,
            IdClase: p.IdClase,
            IdSubClase: p.IdSubClase,
            IdUnidad: p.IdUnidad,
            IdEmpaque: p.IdEmpaque,
            Proveedor: p.Proveedor,
            pvpc: 0,
            pvdc: 0,
            pvpu: 0,
            pvdu: 0,
            Impuesto: p.Impuesto,
            IdEstado: p.IdEstado,
            FechaSincronizacion: fechaNumeric17()
        });

        return result;
    } catch(error) {
        console.log(error)
        return -1;
    }
}

export const updateProduct = async (p) => {
    try {
        const [result] = await Product.update({
            Id : p.Id,
            Codigo: p.Codigo,
            Descripcion: p.Descripcion,
            IdClase: p.IdClase,
            IdSubClase: p.IdSubClase,
            IdUnidad: p.IdUnidad,
            IdEmpaque: p.IdEmpaque,
            Proveedor: p.Proveedor,
            Impuesto: p.Impuesto,
            IdEstado: p.IdEstado,
            FechaSincronizacion: fechaNumeric17()
        }, {
            where: {Id: p.Id}
        });

        if (result > 0) {
            return getProduct(p.Id);
        }

        return null;
    } catch(error) {
        console.log(error)
        return -1;
    }
}

export const getProducts = async (filter, keyword, page, limit, orderBy, sortBy, fechaSincro) => {
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

        const data = await Product.findAndCountAll({
            where: query,
            ...queries,
            loggin: console.log
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

const getNewId = async () => {
    try {
        const maxId = await Product.max('Id')
        
        return maxId + 1;
    } catch (error) {
        console.log(error)
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

export const getProductByCode = async (code) => {
    try {
        const product = await Product.findOne({where: {Codigo: code}})
        
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