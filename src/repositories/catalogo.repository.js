import Clase from "../models/clase.model.js"
import SubClase from "../models/subclase.model.js"
import Empaque from "../models/empaque.model.js"
import Proveedor from "../models/proveedor.model.js"
import Unidad from "../models/unidad.model.js"
import { Op } from "sequelize"

export const Catalogo = {
    CLASE: 'clase',
    SUBCLASE: 'subclase',
    EMPAQUE: 'empaque',
    PROVEEDOR: 'proveedor',
    UNIDAD: 'unidad'
}

export const getClase = async (id) => {
    try {
        const catalog = await Clase.findOne({where: {Id: id}})
        
        return catalog
    } catch (error) {
        console.log(error)
    }
}

export const getSubClase = async (id) => {
    try {
        const catalog = await SubClase.findOne({where: {Id: id}})
        
        return catalog
    } catch (error) {
        console.log(error)
    }
}

export const getEmpaque = async (id) => {
    try {
        const catalog = await Empaque.findOne({where: {Id: id}})
        
        return catalog
    } catch (error) {
        console.log(error)
    }
}

export const getProveedor = async (id) => {
    try {
        const catalog = await Proveedor.findOne({where: {Id: id}})
        
        return catalog
    } catch (error) {
        console.log(error)
    }
}

export const getUnidad = async (id) => {
    try {
        const catalog = await Unidad.findOne({where: {Id: id}})
        
        return catalog
    } catch (error) {
        console.log(error)
    }
}

///////////////
export const getAllClases = async (fechaSincro) => {
    try {
        const catalog = await Clase.findAll({where: {FechaSincronizacion: {[Op.gt]:fechaSincro}}})
        
        return catalog
    } catch (error) {
        console.log(error)
    }
}

export const getAllSubClases = async (fechaSincro) => {
    try {
        const catalog = await SubClase.findAll({where: {FechaSincronizacion: {[Op.gt]:fechaSincro}}})
        
        return catalog
    } catch (error) {
        console.log(error)
    }
}

export const getAllEmpaques = async (fechaSincro) => {
    try {
        const catalog = await Empaque.findAll({where: {FechaSincronizacion: {[Op.gt]:fechaSincro}}})
        
        return catalog
    } catch (error) {
        console.log(error)
    }
}

export const getAllProveedores = async (fechaSincro) => {
    try {
        const catalog = await Proveedor.findAll({where: {FechaSincronizacion: {[Op.gt]:fechaSincro}}})
        
        return catalog
    } catch (error) {
        console.log(error)
    }
}

export const getAllUnidades = async (fechaSincro) => {
    try {
        const catalog = await Unidad.findAll({where: {FechaSincronizacion: {[Op.gt]:fechaSincro}}})
        
        return catalog
    } catch (error) {
        console.log(error)
    }
}