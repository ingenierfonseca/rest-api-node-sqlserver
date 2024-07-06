import { Op } from "sequelize"
import { fechaNumeric17 } from "../helpers/utils.js";
import Client from "../models/cliente.model.js";

export const createClient = async (p) => {
    try {
        const id = await getNewId();
        const result = await Client.create({
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

export const updateClient = async (p) => {
    try {
        const [result] = await Client.update({
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
            return getClient(p.Id);
        }

        return null;
    } catch(error) {
        console.log(error)
        return -1;
    }
}

export const getClients = async (filter, keyword, page, limit, orderBy, sortBy, fechaSincro) => {
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
            query.Estado = {[Op.gt]: 0}
        }

        const queries = {
            offset: (page -1) * limit,
            limit
        }

        /*if (orderBy) {
            queries.order = [[orderBy, sortBy]]
        }*/

        const data = await Client.findAndCountAll({
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
        const maxId = await Client.max('Id')
        
        return maxId + 1;
    } catch (error) {
        console.log(error)
    }
}

export const getClient = async (id) => {
    try {
        const client = await Client.findOne({where: {Id: id}})
        
        return client
    } catch (error) {
        console.log(error)
    }
}

export const getClientByCode = async (code) => {
    try {
        const client = await Client.findOne({where: {Codigo: code}})
        
        return client
    } catch (error) {
        console.log(error)
    }
}

export const deleteClient = async (id) => {
    try {
        const client = await Client.findOne({where: {Id: id}});

        if (client == null) {
            return 0;
        }

        const result = await Client.destroy({where: {Id: id}});
        console.log(result);
        
        return client
    } catch (error) {
        console.log(error)
        return -1;
    }
}