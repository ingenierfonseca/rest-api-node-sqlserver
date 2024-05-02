import { DataTypes } from 'sequelize';
import { sequelize } from '../db/connection.js';


const User = sequelize.define('User', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'Id'
    },
    EmpresaID: DataTypes.INTEGER,
    Codigo: DataTypes.STRING,
    Clave: DataTypes.STRING,
    Nombres: DataTypes.STRING,
    Apellidos: DataTypes.STRING
}, { 
    tableName: 'mstUsuario',
    timestamps: false,
});

export default User;