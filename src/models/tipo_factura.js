import { DataTypes } from 'sequelize';
import { sequelize2 } from '../db/connection.js';


const TipoFactura = sequelize2.define('TipoFactura', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'IdTipoFactura'
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
    tableName: 'catTipoFactura',
    timestamps: false
});

export default TipoFactura;