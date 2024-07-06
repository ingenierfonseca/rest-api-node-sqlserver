import { DataTypes } from 'sequelize';
import { sequelize2 } from '../db/connection.js';


const Client = sequelize2.define('Clients', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'registro'
    },
    Codigo: {
        type: DataTypes.STRING,
        field: 'codigo'
    },
    IdTipoCliente: {
        type: DataTypes.STRING,
        field: 'tipocli'
    },
    IdTipoId: {
        type: DataTypes.TINYINT,
        field: 'tipo_id'
    },
    Identificacion: {
        type: DataTypes.TINYINT,
        field: 'num_id'
    },
    Nombre: {
        type: DataTypes.TINYINT,
        field: 'nombre'
    },
    Direccion: {
        type: DataTypes.TINYINT,
        field: 'direccion'
    },
    NegRegistro: { 
        type: DataTypes.TINYINT,
        field: 'negregistro'
    },
    VendREgistro: { 
        type: DataTypes.NUMBER,
        field: 'vendregistro'
    },
    DepRegistro: {
        type: DataTypes.NUMBER,
        field: 'deptregistro'
    },
    NumRegistro: {
        type: DataTypes.NUMBER,
        field: 'munregistro'
    },
    Telefono: {
        type: DataTypes.NUMBER,
        field: 'telefono'
    },
    Fax: {
        type: DataTypes.NUMBER,
        field: 'fax'
    },
    Correo: {
        type: DataTypes.STRING,
        field: 'correo'
    },
    Negocio: {
        type: DataTypes.TINYINT,
        field: 'negocio'
    },
    DireccionNegocio: {
        type: DataTypes.TINYINT,
        field: 'negdirec'
    },
    Contacto1: {
        type: DataTypes.NUMBER,
        field: 'contacto01'
    },
    Contacto2: {
        type: DataTypes.DECIMAL,
        field: 'contacto02'
    },
    Limite: {
        type: DataTypes.NUMBER,
        field: 'limite'
    },
    Saldo: {
        type: DataTypes.NUMBER,
        field: 'saldo'
    },
    DiasCredito: {
        type: DataTypes.NUMBER,
        field: 'dias_credito'
    },
    CTAContable: {
        type: DataTypes.NUMBER,
        field: 'cta_contable'
    },
    Estado: {
        type: DataTypes.NUMBER,
        field: 'estado'
    },
    SaldoAFavor: {
        type: DataTypes.DECIMAL,
        field: 'saldofavor'
    },
    SaldoUSD: {
        type: DataTypes.DECIMAL,
        field: 'SaldoUSD'
    },
    FechaSincronizacion: DataTypes.BIGINT
}, { 
    tableName: 'prm_Clientes',
    timestamps: false
});

export default Client;