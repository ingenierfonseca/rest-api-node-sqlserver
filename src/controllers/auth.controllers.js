import { getConnection } from "../db/connection.js"
import { login, getConfiguration, getUser, getUserById } from "../repositories/auth.repository.js"
import { generateJWT, refreshTokenJWT } from "../helpers/jws.js"

export const get = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request().query('select * from mstUsuario')
    res.send(result.recordset)
}

export const auth = async (req, res) => {
    const {user, password} = req.body

    if (user == null || password == null) {
        return res.status(400).json({
            message: 'Bad Request. Please fill all fields'
        })
    }

    try {
        const result = await login(user, password)

        if (result == null) return res.status(400).json({ message: 'Invalid User' })

        const token =  await generateJWT(result.Id, user)

        const refreshToken = await refreshTokenJWT(result.Id, user)

        return res.json({
            ok: true,
            uid: result.Id,
            user: result.Codigo,
            token: token,
            refreshToken: refreshToken
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const refreshToken = async (req, res) => {
    try {
        const uid = req.uid;

        const user = await getUserById(uid);

        if (user == null) return res.status(400).json({ message: 'User not found' })

        const token =  await generateJWT(user.Id, user)
    
        const refreshToken = await refreshTokenJWT(user.Id, user)
    
        return res.json({
            ok: true,
            uid: user.Id,
            user: user.Codigo,
            token: token,
            refreshToken: refreshToken
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Internal error cod: RA0052'
        })
    }
}

export const findUser = async (req, res) => {
    const {Code} = req.params
    const {fechaSincro = 0} = req.query

    if (Code == null) {
        return res.status(400).json({
            message: 'Bad Request. Please fill all fields'
        })
    }

    try {
        const result = await getUser(Code, fechaSincro)

        //if (result == null) return res.status(400).json({ message: 'Invalid Param' })

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
    const {fechaSincro = 0} = req.query

    if (Id == null) {
        return res.status(400).json({
            message: 'Bad Request. Please fill all fields'
        })
    }

    try {
        const result = await getConfiguration(Id, parseInt(fechaSincro))

        //if (result == null) return res.status(400).json({ message: 'Invalid Param' })

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