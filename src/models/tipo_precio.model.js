import { DataTypes } from 'sequelize';
import { sequelize2 } from '../db/connection.js';


const TipoPrecio = sequelize2.define('TipoPrecio', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'Id'
    },
    Codigo: {
        type: DataTypes.STRING,
        field: 'Codigo'
    },
    Descripcion: {
        type: DataTypes.STRING,
        field: 'Descripcion'
    },
    ValidaPrecio: {
        type: DataTypes.BOOLEAN,
        field: 'IndicaValidaPrecio'
    },
    Precio: {
        type: DataTypes.INTEGER,
        field: 'OpcionMenuPrecio'
    },
    EsPrecioCosto: {
        type: DataTypes.BOOLEAN,
        field: 'EsPercioCosto'
    },
    PorDefecto: {
        type: DataTypes.BOOLEAN,
        field: 'PorDefecto'
    },
    Activo: {
        type: DataTypes.TINYINT,
        field: 'Activo'
    },
    FechaSincronizacion: DataTypes.BIGINT
}, { 
    tableName: 'catTipoPrecio',
    timestamps: false
});

export default TipoPrecio;