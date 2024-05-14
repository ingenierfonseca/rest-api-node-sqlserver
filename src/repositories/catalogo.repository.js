import Clase from "../models/clase.model.js"
import SubClase from "../models/subclase.model.js"
import Empaque from "../models/empaque.model.js"
import Proveedor from "../models/proveedor.model.js"
import Unidad from "../models/unidad.model.js"

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
export const getAllClases = async () => {
    try {
        const catalog = await Clase.findAll()
        
        return catalog
    } catch (error) {
        console.log(error)
    }
}

export const getAllSubClases = async () => {
    try {
        const catalog = await SubClase.findAll()
        
        return catalog
    } catch (error) {
        console.log(error)
    }
}

export const getAllEmpaques = async () => {
    try {
        const catalog = await Empaque.findAll()
        
        return catalog
    } catch (error) {
        console.log(error)
    }
}

export const getAllProveedores = async () => {
    try {
        const catalog = await Proveedor.findAll()
        
        return catalog
    } catch (error) {
        console.log(error)
    }
}

export const getAllUnidades = async () => {
    try {
        const catalog = await Unidad.findAll()
        
        return catalog
    } catch (error) {
        console.log(error)
    }
}