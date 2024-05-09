import sql from "mssql";
import config from "../config.js";
import { Sequelize } from "sequelize";

const dbSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDatabase,
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
};

export const getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings);
        console.log("Conectado a la base de datos");
        
        return pool;
    } catch (error) {
        console.error(error);
    }
};

const sequelize = new Sequelize(config.dbDatabase, config.dbUser, config.dbPassword, {
    host: config.dbServer,
    dialect: 'mssql', // Specify your database dialect
  });

const sequelize2 = new Sequelize('db_a827be_factinventario', 'db_a827be_factinventario_admin', 'Invetfact24*', {
    host: 'SQL5113.site4now.net',
    dialect: 'mssql', // Specify your database dialect
  });

  export { sql, sequelize, sequelize2 };