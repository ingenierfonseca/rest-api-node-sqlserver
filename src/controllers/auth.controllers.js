import { getConnection } from "../db/connection.js"
import { login, getConfiguration, getUser } from "../repositories/auth.repository.js"
import { generateJWT } from "../helpers/jws.js"

export const get = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request().query('select * from mstUsuario')
    res.send(result.recordset)
}

export const auth = async (req, res) => {
    const {user, password} = req.body

    console.log(user, password)
    if (user == null || password == null) {
        return res.status(400).json({
            message: 'Bad Request. Please fill all fields'
        })
    }

    try {
        const result = await login(user, password)

        if (result == null) return res.status(400).json({ message: 'Invalid User' })

        const token =  await generateJWT(1, user)
        console.log(token)

        return res.json({
            ok: true,
            uid: result.Id,
            user: result.Codigo,
            token: token
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const findUser = async (req, res) => {
    const {Code} = req.params

    console.log(Code)
    if (Code == null) {
        return res.status(400).json({
            message: 'Bad Request. Please fill all fields'
        })
    }

    try {
        const result = await getUser(Code)

        if (result == null) return res.status(400).json({ message: 'Invalid Param' })

        return res.json({
            ok: true,
            result
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const configuration = async (req, res) => {
    const {Id} = req.params

    console.log(Id)
    if (Id == null) {
        return res.status(400).json({
            message: 'Bad Request. Please fill all fields'
        })
    }

    try {
        const result = await getConfiguration(Id)

        if (result == null) return res.status(400).json({ message: 'Invalid Param' })

        return res.json({
            ok: true,
            result
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}