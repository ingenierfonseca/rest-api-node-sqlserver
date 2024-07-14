import { DataTypes } from 'sequelize';
import { sequelize2 } from '../db/connection.js';


const Vendedor = sequelize2.define('Vendedor', {
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
        field: 'nombre'
    },
    IdEstado: {
        type: DataTypes.TINYINT,
        field: 'estado'
    },
    FechaSincronizacion: DataTypes.BIGINT
}, { 
    tableName: 'prm_Vendedores',
    timestamps: false
});

export default Vendedor;