//import { getConnection, sql } from "../db/connection.js"
import User from "../models/user.model.js"
import Configuration from "../models/configuration.model.js"

export const login = async (userCode, password) =>  {
    try {
        //const pool = await getConnection()
        //const result = await pool.request()
            //.input('Codigo', user)
            //.input('Clave', password)
            //.query('SELECT * FROM mstUsuario WHERE Codigo = @Codigo AND Clave = @Clave')
        const user = await User.findOne({where: {Codigo: userCode, Clave: password}})
        
        return user
    } catch (error) {
        console.log(error)
    }
}

export const getUserById = async (id) => {
    try {
        const user = await User.findOne({where: {Id: id}})
        
        return user
    } catch (error) {
        console.log(error)
    }
}

export const getUser = async (code) => {
    try {
        const user = await User.findOne({where: {Codigo: code}})
        
        return user
    } catch (error) {
        console.log(error)
    }
}

export const getConfiguration = async (companiId) => {
    try {
        const config = await Configuration.findOne({where: {Id: companiId}})
        
        return config
    } catch (error) {
        console.log(error)
    }
}