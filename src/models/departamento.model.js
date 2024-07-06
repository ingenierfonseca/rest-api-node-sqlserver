import { DataTypes } from 'sequelize';
import { sequelize2 } from '../db/connection.js';


const Departamento = sequelize2.define('Departamento', {
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
        type: DataTypes.STRING,
        field: 'codcorto'
    },
    IdEstado: {
        type: DataTypes.INTEGER,
        field: 'estado'
    },
    FechaSincronizacion: DataTypes.BIGINT
}, { 
    tableName: 'prm_Departamentos',
    timestamps: false
});

export default Departamento;