import express from "express";
import config from "./config.js";
import indexRouter from "./routes/app.routes.js"

const app = express();

// Settings
app.set('port', config.port)

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/v1', indexRouter);

export default app;