import { getConnection } from "../db/connection.js"
import { login } from "../repositories/auth.repository.js"
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
        //const validPassword = bycript.compareSync(password, db_user.password)
        //if (!validPassword) return res.status(400).json({ message: 'Invalid Password' })
        const result = await login(user, password)

        if (result.length == 0) return res.status(400).json({ message: 'Invalid User' })

        const token =  await generateJWT(1, user)
        console.log(token)

        return res.json({
            ok: true,
            //uid: db_user.uid,
            //email: db_user.email,
            token: token
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}