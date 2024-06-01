import { DataTypes } from 'sequelize';
import { sequelize } from '../db/connection.js';


const Configuration = sequelize.define('Configuration', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'Id'
    },
    Codigo: DataTypes.STRING,
    Nombre: DataTypes.STRING,
    Logo: DataTypes.STRING,
    UrlApi: DataTypes.STRING,
    ApiKey: DataTypes.STRING,
    PrimaryColor: DataTypes.STRING,
    SecondaryColor: DataTypes.STRING,
    SincronizationTimeDelay: DataTypes.INTEGER,
    FechaSincronizacion: DataTypes.BIGINT
}, {
    tableName: 'mstEmpresa',
    timestamps: false,
});

export default Configuration;