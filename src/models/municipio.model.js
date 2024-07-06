import { DataTypes } from 'sequelize';
import { sequelize2 } from '../db/connection.js';


const Municipio = sequelize2.define('Municipio', {
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
    Registro: {
        type: DataTypes.INTEGER,
        field: 'registro2'
    },
    FechaSincronizacion: DataTypes.BIGINT
}, { 
    tableName: 'prm_Municipios',
    timestamps: false
});

export default Municipio;