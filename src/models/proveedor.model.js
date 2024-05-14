import { DataTypes } from 'sequelize';
import { sequelize2 } from '../db/connection.js';


const Proveedor = sequelize2.define('Proveedor', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'registro'
    },
    Codigo: {
        type: DataTypes.STRING,
        field: 'codigo'
    },
    Identificacion: {
        type: DataTypes.STRING,
        field: 'Identificacion'
    },
    Nombre: {
        type: DataTypes.STRING,
        field: 'nombre'
    },
    IdEstado: {
        type: DataTypes.TINYINT,
        field: 'estado'
    },
}, { 
    tableName: 'prm_Proveedores',
    timestamps: false
});

export default Proveedor;