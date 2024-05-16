import jwt from 'jsonwebtoken'

export const validatorJWT2 = (req, res, next) => {
    const token = req.header('authorization');

    if (!token) {
        return res.status(401).json({
            ok: false,
            message: 'Invalid token (empty)'
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

export const validatorJWT = (req, res, next) => {
    let token = req.headers["authorization"];
    if (!token) {
      return res.status(403).send({ message: "No token provided!" });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return catchError(err, req, res, next);
        }
        const { uid, name } = decoded
        req.uid = uid;
        req.userName = name
        next();
    });
};

const { TokenExpiredError } = jwt;
const catchError = (err, req, res, next) => {
    const { refreshToken } = req.body

    if (refreshToken) {
        try {
            const { uid, name } = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
            req.uid = uid;
            req.userName = name
            next();
        } catch (error) {console.log(error);
            if (err instanceof TokenExpiredError) {
                return res.status(401).send({ message: "Unauthorized! Access refreshToken expired!" });
            }

            return res.status(401).json({
                ok: false,
                message: 'Unauthorized invalid refreshToken'
            });
        }
    } else {
        if (err instanceof TokenExpiredError) {
            return res.status(401).send({ message: "Unauthorized! Access Token expired!" });
        }
        return res.status(401).send({ message: "Unauthorized!" });
    }
}