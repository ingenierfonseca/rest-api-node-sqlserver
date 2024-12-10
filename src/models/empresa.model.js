import { DataTypes } from 'sequelize';
import { sequelize2 } from '../db/connection.js';


const Empresa = sequelize2.define('Empresa', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'IdEmpresa'
    },
    TasaCambio: {
        type: DataTypes.STRING,
        field: 'TasaCambioGlobal'
    },
    FechaSincronizacion: DataTypes.BIGINT
}, { 
    tableName: 'prmEmpresa',
    timestamps: false
});

export default Empresa;