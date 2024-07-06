import { DataTypes } from 'sequelize';
import { sequelize2 } from '../db/connection.js';


const PrecioSucursalProducto = sequelize2.define('PrecioSucursalProducto', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'ID'
    },
    AgenciaId: {
        type: DataTypes.INTEGER,
        field: 'AgenciaID'
    },
    TipoPrecioId: {
        type: DataTypes.INTEGER,
        field: 'TipoPrecioID'
    },
    ProductoId: {
        type: DataTypes.INTEGER,
        field: 'ProductoID'
    },
    MonedaId: {
        type: DataTypes.INTEGER,
        field: 'MonedaID'
    },
    Precio: {
        type: DataTypes.NUMBER,
        field: 'Precio'
    },
    Activo: {
        type: DataTypes.BOOLEAN,
        field: 'Activo'
    },
    FechaSincronizacion: DataTypes.BIGINT
}, { 
    tableName: 'prmPrecioSucursalProducto',
    timestamps: false
});

export default PrecioSucursalProducto;