import express from "express";

const { Router } = express;
const router = new Router();

import session from 'express-session';
import passport from 'passport';
import sessionConfig from './../configs/sessionConfig.js';

import {
    getMovies,
    postMovies,
    putMovies,
    deleteMovie,
    getMovieDetails
} from './../controllers/moviesControllers.js'

//---------- MIDDLEWARES ---------------//

//----- SESSIONS
router.use(session(sessionConfig));

//---- PASSPORT
router.use(passport.initialize());
router.use(passport.session());

import isAuth from './../configs/isAuthMiddleware.js'

import uploadImg from './../configs/multerConfig.js'

//--------- ROUTES --------//

router.get('/', isAuth, getMovies);
router.post('/', isAuth, uploadImg.single('img'), postMovies);
router.put('/:id', isAuth, uploadImg.single('img'), putMovies);
router.delete('/:id', isAuth, deleteMovie)
router.get('/:id', isAuth, getMovieDetails)



export { router }