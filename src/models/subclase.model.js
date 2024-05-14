import { DataTypes } from 'sequelize';
import { sequelize2 } from '../db/connection.js';


const SubClase = sequelize2.define('SubClase', {
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
    Facturar: {
        type: DataTypes.INTEGER,
        field: 'facturar'
    },
    IdEstado: {
        type: DataTypes.TINYINT,
        field: 'estado'
    },
}, { 
    tableName: 'prm_SubClases',
    timestamps: false
});

export default SubClase;