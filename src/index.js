import express from "express";

import {router as charactersRoutes} from "./routes/characters.js";
import {router as authRoutes} from './routes/auth.js';
import {router as moviesRoutes} from './routes/movies.js';

const app = express();

const PORT = process.env.PORT || 8080;

//------------------------- STATICS -------------------------------//

app.use(express.static('./../public'));


//-------------------------------- MIDLEWARES ---------------------//

app.use(express.json());
app.use(express.urlencoded({extended:false}));


//---------- ROUTES -----------------//

app.use('/api/characters', charactersRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/movies', moviesRoutes);


//-----ERROR HANDLINGS
//--ERROR 404
app.use((req, res, next) => {
    const error = {
        url: req.originalUrl,
        method: req.method,
        status: 404,
        error: `Not found`
    }
    res.status(error.status).send(error);
});
//--ERROR 500
app.use((err, req, res, next) => {
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});


//------- SERVER INITIALIZE ------//

const server = app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`);
});

server.on('error', error => console.log(`Error on server ${error}`));