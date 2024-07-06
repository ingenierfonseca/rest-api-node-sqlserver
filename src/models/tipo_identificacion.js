import { DataTypes } from 'sequelize';
import { sequelize2 } from '../db/connection.js';


const TipoIdentificacion = sequelize2.define('TipoIdentificacion', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'registro'
    },
    Descripcion: {
        type: DataTypes.STRING,
        field: 'descripcion'
    },
    FechaSincronizacion: DataTypes.BIGINT
}, { 
    tableName: 'cat_Identificacion',
    timestamps: false
});

export default TipoIdentificacion;