import jwt from 'jsonwebtoken'

export const validatorJWT = (req, res, next) => {
    const token = req.header('authorization');

    if (!token) {
        return res.status(401).json({
            ok: false,
            message: 'Invalid token'
        })
    }

    try {
        const { uid, name } = jwt.verify(token, process.env.JWT_KEY);
        req.uid = uid;
        req.email = name

        next();
    } catch (error) {
        return res.status(401).json({
            ok: false,
            message: 'Invalid token'
        });
    }
}