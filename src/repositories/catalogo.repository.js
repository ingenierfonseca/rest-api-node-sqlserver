import Clase from "../models/clase.model.js"
import SubClase from "../models/subclase.model.js"
import Empaque from "../models/empaque.model.js"
import Proveedor from "../models/proveedor.model.js"
import Unidad from "../models/unidad.model.js"
import { Op } from "sequelize"
import Moneda from "../models/moneda.model.js"
import TipoPrecio from "../models/tipo_precio.model.js"
import Agencia from "../models/agencia.model.js"
import TipoIdentificacion from "../models/tipo_identificacion.js"

export const Catalogo = {
    AGENCIA: 'agencia',
    CLASE: 'clase',
    SUBCLASE: 'subclase',
    EMPAQUE: 'empaque',
    MONEDA: 'moneda',
    PROVEEDOR: 'proveedor',
    TIPOIDENTIFICACION: 'tipo_identificacion',
    TIPOPRECIO: 'tipo_precio',
    UNIDAD: 'unidad'
}

export const getAgencia = async (id) => {
    try {
        const catalog = await Agencia.findOne({where: {Id: id}})
        
        return catalog
    } catch (error) {
        console.log(error)
    }
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

export const getMoneda = async (id) => {
    try {
        const catalog = await Moneda.findOne({where: {Id: id}})
        
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

export const getTipoIdentificacion = async (id) => {
    try {
        const catalog = await TipoIdentificacion.findOne({where: {Id: id}})
        
        return catalog
    } catch (error) {
        console.log(error)
    }
}

export const getTipoPrecio = async (id) => {
    try {
        const catalog = await TipoPrecio.findOne({where: {Id: id}})
        
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
export const getAllAgencias = async (fechaSincro) => {
    try {
        const catalog = await Agencia.findAll({where: {FechaSincronizacion: {[Op.gt]:fechaSincro}}})
        
        return catalog
    } catch (error) {
        console.log(error)
    }
}

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

export const getAllMonedas = async (fechaSincro) => {
    try {
        const catalog = await Moneda.findAll({where: {FechaSincronizacion: {[Op.gt]:fechaSincro}}})
        
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

export const getAllTipoIdentificaciones = async (fechaSincro) => {
    try {
        const catalog = await TipoIdentificacion.findAll({where: {FechaSincronizacion: {[Op.gt]:fechaSincro}}})
        
        return catalog
    } catch (error) {
        console.log(error)
    }
}

export const getAllTipoPrecios = async (fechaSincro) => {
    try {
        const catalog = await TipoPrecio.findAll({where: {FechaSincronizacion: {[Op.gt]:fechaSincro}}})
        
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