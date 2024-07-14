import { DataTypes } from 'sequelize';
import { sequelize2 } from '../db/connection.js';


const Negocio = sequelize2.define('Negocio', {
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
    FechaSincronizacion: DataTypes.BIGINT
}, { 
    tableName: 'prm_Negocios',
    timestamps: false
});

export default Negocio;