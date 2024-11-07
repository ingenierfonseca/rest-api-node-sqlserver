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
import Municipio from "../models/municipio.model.js"
import Departamento from "../models/departamento.model.js"
import Negocio from "../models/negocio.model.js"
import Vendedor from "../models/vendedor.model.js"
import TipoCliente from "../models/tipo_cliente.model.js"
import UsuarioAgencia from "../models/usuario_agencia.js"
import TipoFactura from "../models/tipo_factura.js"

export const Catalogo = {
    AGENCIA: 'agencia',
    CLASE: 'clase',
    SUBCLASE: 'subclase',
    DEPARTAMENTO: 'departamento',
    EMPAQUE: 'empaque',
    MONEDA: 'moneda',
    MUNICIPIO: 'municipio',
    NEGOCIO: 'negocio',
    PROVEEDOR: 'proveedor',
    TIPOCLIENTE: 'tipo_cliente',
    TIPOIDENTIFICACION: 'tipo_identificacion',
    TIPOPRECIO: 'tipo_precio',
    TIPOFACTURA: 'tipo_factura',
    UNIDAD: 'unidad',
    USUARIOAGENCIA: 'usuario_agencia',
    VENDEDOR: 'vendedor'
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

export const getDepartamento = async (id) => {
    try {
        const catalog = await Departamento.findOne({where: {Id: id}})
        
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

export const getMunicipio = async (id) => {
    try {
        const catalog = await Municipio.findOne({where: {Id: id}})
        
        return catalog
    } catch (error) {
        console.log(error)
    }
}

export const getNegocio = async (id) => {
    try {
        const catalog = await Negocio.findOne({where: {Id: id}})
        
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

export const getTipoCliente = async (id) => {
    try {
        const catalog = await TipoCliente.findOne({where: {Id: id}})
        
        return catalog
    } catch (error) {
        console.log(error)
    }
}

export const getTipoFactura = async (id) => {
    try {
        const catalog = await TipoFactura.findOne({where: {Id: id}})
        
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

export const getUsuarioAgencia = async (id) => {
    try {
        const catalog = await UsuarioAgencia.findOne({where: {Id: id}})
        
        return catalog
    } catch (error) {
        console.log(error)
    }
}

export const getVendedor = async (id) => {
    try {
        const catalog = await Vendedor.findOne({where: {Id: id}})
        
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

export const getAllDepartamentos = async (fechaSincro) => {
    try {
        const catalog = await Departamento.findAll({where: {FechaSincronizacion: {[Op.gt]:fechaSincro}}})
        
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

export const getAllMunicipios = async (fechaSincro) => {
    try {
        const catalog = await Municipio.findAll({where: {FechaSincronizacion: {[Op.gt]:fechaSincro}}})
        
        return catalog
    } catch (error) {
        console.log(error)
    }
}

export const getAllNegocios = async (fechaSincro) => {
    try {
        const catalog = await Negocio.findAll({where: {FechaSincronizacion: {[Op.gt]:fechaSincro}}})
        
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

export const getAllTipoClientes = async (fechaSincro) => {
    try {
        const catalog = await TipoCliente.findAll({where: {FechaSincronizacion: {[Op.gt]:fechaSincro}}})
        
        return catalog
    } catch (error) {
        console.log(error)
    }
}

export const getAllTipoFacturas = async (fechaSincro) => {
    try {
        const catalog = await TipoFactura.findAll({where: {FechaSincronizacion: {[Op.gt]:fechaSincro}}})
        
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

export const getAllUsuarioAgencias = async (fechaSincro) => {
    try {
        const catalog = await UsuarioAgencia.findAll({where: {FechaSincronizacion: {[Op.gt]:fechaSincro}}})
        
        return catalog
    } catch (error) {
        console.log(error)
    }
}

export const getAllAgenciasUsuario = async (userId, fechaSincro) => {
    try {
        const catalog = await UsuarioAgencia.findAll({where: {UsuarioId: userId, FechaSincronizacion: {[Op.gt]:fechaSincro}}})
        
        return catalog
    } catch (error) {
        console.log(error)
    }
}

export const getAllVendedores = async (fechaSincro) => {
    try {
        const catalog = await Vendedor.findAll({where: {FechaSincronizacion: {[Op.gt]:fechaSincro}}})
        
        return catalog
    } catch (error) {
        console.log(error)
    }
}