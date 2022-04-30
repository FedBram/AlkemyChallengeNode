import express from "express";

const { Router } = express
const router = new Router();

import session from 'express-session';
import passport from 'passport';
import sessionConfig from './../configs/sessionConfig.js';

import { 
    getCharacters, 
    postCharacter, 
    putCharacter, 
    deleteCharacter, 
    getCharacterDetails 
} from './../controllers/charactersControllers.js';

//---------- MIDDLEWARES ---------------//

//----- SESSIONS
router.use(session(sessionConfig));

//---- PASSPORT
router.use(passport.initialize());
router.use(passport.session());

import isAuth from './../configs/isAuthMiddleware.js';

import uploadImg from './../configs/multerConfig.js';

//-------- ROUTES ------//


router.get('/', isAuth, getCharacters);
router.post('/', isAuth, uploadImg.single('img'), postCharacter);
router.put('/:id', isAuth, uploadImg.single('img'), putCharacter);
router.delete('/:id', isAuth, deleteCharacter);
router.get('/:id', isAuth, getCharacterDetails);




export { router }