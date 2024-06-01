import { DataTypes } from 'sequelize';
import { sequelize2 } from '../db/connection.js';


const Clase = sequelize2.define('Clase', {
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
    tableName: 'prm_Clases',
    timestamps: false
});

export default Clase;