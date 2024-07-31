import { DataTypes } from 'sequelize';
import { sequelize2 } from '../db/connection.js';


const TipoCliente = sequelize2.define('TipoCliente', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'Id'
    },
    Descripcion: {
        type: DataTypes.STRING,
        field: 'descripcion'
    },
    Activo: {
        type: DataTypes.BOOLEAN,
        field: 'activo'
    },
    FechaSincronizacion: DataTypes.BIGINT
}, { 
    tableName: 'catTipoCliente',
    timestamps: false
});

export default TipoCliente;