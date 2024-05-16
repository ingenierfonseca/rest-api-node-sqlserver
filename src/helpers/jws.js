import jwt from 'jsonwebtoken';
import config from '../config.js';

const jwtDataOptions = {
    secret: process.env.JWT_SECRET,
    jwtExpiration: process.env.JWT_EXPIRATION,
    jwtRefreshExpiration: process.env.JWT_REFRESH_EXPIRATION,
}

export const generateJWT = (uid, name) => {
    return new Promise((resolve, reject) => {
        const payload = { uid, name };

        jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRATION
        }, (err, token) => {
            if (err) {
                reject('Error on generated JWT')
            } else {
                resolve(token);
            }
        });
    })
}

export const refreshTokenJWT = (uid, name) => {
    return new Promise((resolve, reject) => {
        const payload = { uid, name };

        jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
            expiresIn: process.env.JWT_REFRESH_EXPIRATION
        }, (err, token) => {
            if (err) {
                reject('Error on generated JWT')
            } else {
                resolve(token);
            }
        });
    })
}