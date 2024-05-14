import { DataTypes } from 'sequelize';
import { sequelize2 } from '../db/connection.js';


const Unidad = sequelize2.define('Unidad', {
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
    tableName: 'prm_Unidades',
    timestamps: false
});

export default Unidad;