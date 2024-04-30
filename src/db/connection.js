import sql from "mssql";
import config from "../config.js";

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

export { sql };