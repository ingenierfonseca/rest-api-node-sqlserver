import { DataTypes } from 'sequelize';
import { sequelize2 } from '../db/connection.js';


const Agencia = sequelize2.define('Agencia', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
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
    IdEstado: {
        type: DataTypes.TINYINT,
        field: 'estado'
    },
    CasaMatriz: DataTypes.STRING,
    Direccion: DataTypes.STRING,
    Telefono: DataTypes.STRING,
    Ruc: DataTypes.STRING,
    FechaSincronizacion: DataTypes.BIGINT
}, { 
    tableName: 'prm_Agencias',
    timestamps: false
});

export default Agencia;