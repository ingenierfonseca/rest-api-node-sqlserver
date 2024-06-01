import { DataTypes } from 'sequelize';
import { sequelize2 } from '../db/connection.js';


const Product = sequelize2.define('Products', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        //autoIncrement: true,
        field: 'registro'
    },
    Codigo: {
        type: DataTypes.STRING,
        field: 'codigo'
    },
    Descripcion: {
        type: DataTypes.STRING,
        field: 'descripcion'
    },
    IdClase: {
        type: DataTypes.TINYINT,
        field: 'regclase'
    },
    IdSubClase: {
        type: DataTypes.TINYINT,
        field: 'regsubclase'
    },
    IdUnidad: {
        type: DataTypes.TINYINT,
        field: 'regunidad'
    },
    IdEmpaque: {
        type: DataTypes.TINYINT,
        field: 'regempaque'
    },
    Proveedor: { 
        type: DataTypes.TINYINT,
        field: 'regproveedor'
    },
    PrecioCostoUSD: { 
        type: DataTypes.NUMBER,
        field: 'PrecioCostoUSD'
    },
    PrecioCostoCOR: {
        type: DataTypes.NUMBER,
        field: 'PrecioCostoCOR'
    },
    pvpc: DataTypes.NUMBER,
    pvdc: DataTypes.NUMBER,
    pvpu: DataTypes.NUMBER,
    pvdu: DataTypes.NUMBER,
    Impuesto: {
        type: DataTypes.TINYINT,
        field: 'impuesto'
    },
    IdEstado: {
        type: DataTypes.TINYINT,
        field: 'estado'
    },
    PrecioMinimoVenta: {
        type: DataTypes.NUMBER,
        field: 'PrecioMinimoVenta'
    },
    PrecioVentaDistribuidor: {
        type: DataTypes.DECIMAL,
        field: 'PrcPrecioVentaDistribuidor'
    },
    PrecioVentaPublico: {
        type: DataTypes.NUMBER,
        field: 'PrcPrecioVentaPublico'
    },
    PrecioMinimoVentaUSD: {
        type: DataTypes.NUMBER,
        field: 'PrecioMinimoVentaUSD'
    },
    PrcPrecioMinimoVenta: {
        type: DataTypes.NUMBER,
        field: 'PrcPrecioMinimoVenta'
    },
    FechaSincronizacion: DataTypes.BIGINT
}, { 
    tableName: 'prm_Productos',
    timestamps: false
});

export default Product;