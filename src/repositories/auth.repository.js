import { getConnection, sql } from "../db/connection.js"

export const login = async (user, password) =>  {
    try {
        const pool = await getConnection()
        const result = await pool.request()
            .input('Codigo', user)
            .input('Clave', password)
            .query('SELECT * FROM mstUsuario WHERE Codigo = @Codigo AND Clave = @Clave')
        
        return result.recordset
    } catch (error) {
        console.log(error)
    }
}