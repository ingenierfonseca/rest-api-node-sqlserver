import { config } from "dotenv"
config()

export default {
    port: process.env.PORT || 3000,
    jwtKey: process.env.JWT_KEY || '',
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbServer: process.env.DB_SERVER || '',
    dbDatabase: process.env.DB_DATABASE || ''
}