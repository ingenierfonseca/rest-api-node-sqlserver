import { DataTypes } from 'sequelize';
import { sequelize2 } from '../db/connection.js';


const Empaque = sequelize2.define('Empaque', {
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
}, { 
    tableName: 'prm_Empaques',
    timestamps: false
});

export default Empaque;