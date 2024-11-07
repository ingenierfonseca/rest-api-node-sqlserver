import { DataTypes } from 'sequelize';
import { sequelize2 } from '../db/connection.js';


const FacturaPedidoDet = sequelize2.define('FacturaPedidoDet', {
    PedidoID: {
        type: DataTypes.INTEGER,
        //primaryKey: true,
        field: 'PedidoID'
    },
    DetalleID: {
        type: DataTypes.INTEGER,
        field: 'DetalleID'
    },
    ProductoID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'ProductoID'
    },
    Cantidad: {
        type: DataTypes.INTEGER,
        field: 'cantidad'
    },
    Precio: {
        type: DataTypes.DECIMAL,
        field: 'precio'
    },
    IGV: {
        type: DataTypes.DOUBLE,
        field: 'igv'
    },
    SubTotal: {
        type: DataTypes.DOUBLE,
        field: 'subtotal'
    },
    Total: {
        type: DataTypes.DOUBLE,
        field: 'total'
    },
    NumeroLote: {
        type: DataTypes.STRING,
        field: 'NumeroLote'
    },
    FechaVencimientoNum: {
        type: DataTypes.INTEGER,
        field: 'FechaVencimientoNum'
    },
    FechaIngreso: {
        type: DataTypes.DATE,
        field: 'FechaIngreso'
    },
    FechaSincronizacion: DataTypes.BIGINT
}, { 
    tableName: 'detFacturaPedido',
    timestamps: false
});

export default FacturaPedidoDet;