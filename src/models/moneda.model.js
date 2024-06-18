import { DataTypes } from 'sequelize';
import { sequelize2 } from '../db/connection.js';


const Moneda = sequelize2.define('Moneda', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'registro'
    },
    Codigo: {
        type: DataTypes.STRING,
        field: 'signo'
    },
    Descripcion: {
        type: DataTypes.STRING,
        field: 'descripcion'
    },
    Descripcion2: {
        type: DataTypes.TINYINT,
        field: 'descripcionc'
    },
    FechaSincronizacion: DataTypes.BIGINT
}, { 
    tableName: 'cat_Monedas',
    timestamps: false
});

export default Moneda;