import { DataTypes } from 'sequelize';
import { sequelize2 } from '../db/connection.js';


const FacturaPedido = sequelize2.define('FacturaPedido', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'PedidoID'
    },
    NumeroPedido: {
        type: DataTypes.STRING,
        field: 'numeroPedido'
    },
    NumeroFactura: {
        type: DataTypes.STRING,
        field: 'NumeroFactura'
    },
    FechaPedidoInt: {
        type: DataTypes.TINYINT,
        field: 'numfechapedido'
    },
    FechaPedido: {
        type: DataTypes.DATE,
        field: 'FechaPedido'
    },
    FechaIngreso: {
        type: DataTypes.DATE,
        field: 'FechaIngreso'
    },
    VendedorID: {
        type: DataTypes.INTEGER,
        field: 'VendedorID'
    },
    ClienteID: {
        type: DataTypes.INTEGER,
        field: 'ClienteID'
    },
    UsuarioID: {
        type: DataTypes.INTEGER,
        field: 'UsuarioID'
    },
    AgenciaID: {
        type: DataTypes.INTEGER,
        field: 'AgenciaID'
    },
    EstadoID: {
        type: DataTypes.INTEGER,
        field: 'EstadoID'
    },
    FacturaID: {
        type: DataTypes.INTEGER,
        field: 'FacturaID'
    },
    TipoFacturaID: {
        type: DataTypes.INTEGER,
        field: 'tipofactura'
    },
    MonedaID: {
        type: DataTypes.INTEGER,
        field: 'IdMoneda'
    },
    UsuarioEstadoID: {
        type: DataTypes.INTEGER,
        field: 'UsuarioEstadoID'
    },
    NombreCliente: {
        type: DataTypes.STRING,
        field: 'NombreCliente'
    },
    SubTotal: {
        type: DataTypes.DOUBLE,
        field: 'subtotal'
    },
    SubTotalCosto: {
        type: DataTypes.DOUBLE,
        field: 'SubTotalCosto'
    },
    Impuesto: {
        type: DataTypes.DOUBLE,
        field: 'impuesto'
    },
    Retencion: {
        type: DataTypes.DOUBLE,
        field: 'retencion'
    },
    Total: {
        type: DataTypes.DOUBLE,
        field: 'total'
    },
    DiasCredito: {
        type: DataTypes.INTEGER,
        field: 'diascredito'
    },
    TipoCambio: {
        type: DataTypes.DOUBLE,
        field: 'tipocambio'
    },
    NumFechaEstado: {
        type: DataTypes.INTEGER,
        field: 'numfechaestado'
    },
    FechEstado: {
        type: DataTypes.DATE,
        field: 'FechEstado'
    },
    Direccion: {
        type: DataTypes.STRING,
        field: 'Direccion'
    },
    FechaSincronizacion: DataTypes.BIGINT
}, { 
    tableName: 'mstFacturasPedido',
    timestamps: false
});

export default FacturaPedido;