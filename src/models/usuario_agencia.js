import { DataTypes } from 'sequelize';
import { sequelize2 } from '../db/connection.js';


const UsuarioAgencia = sequelize2.define('UsuarioAgencia', {
    UsuarioId: {
        type: DataTypes.TINYINT,
        field: 'usrregistro'
    },
    AgenciaId: {
        type: DataTypes.TINYINT,
        field: 'agenregistro'
    },
    FechaSincronizacion: DataTypes.BIGINT
}, { 
    tableName: 'prm_UsuariosAgencias',
    timestamps: false,
    // Evitar que Sequelize busque un campo `id` automáticamente
    defaultScope: {
        attributes: { exclude: ['id'] }
    }
});

export default UsuarioAgencia;