import app from "./app.js";
import { getConnection } from "./db/connection.js";

getConnection();

app.listen(app.get('port'));

console.log('servidor iniciado en el puerto ', app.get('port'));