//---------- MODULES ---------//
import express from "express";

const { Router } = express;
const router = new Router();

import session from 'express-session';

import passport from 'passport';
import { Strategy } from "passport-local";

import sessionConfig from './../configs/sessionConfig.js';
import passportConfig from './../configs/passportConfig.js'

import {
    postLogin,
    postRegister,
    getLogout
} from './../controllers/authControllers.js'


//---------- MIDDLEWARES ---------------//

//----- SESSIONS
router.use(session(sessionConfig));

//---- PASSPORT
router.use(passport.initialize());
router.use(passport.session());

passport.use("login", new Strategy(passportConfig.fields, passportConfig.login));
passport.use('register', new Strategy(passportConfig.fields, passportConfig.register));

passport.serializeUser((user, done) => {
    done(null, user)
});
passport.deserializeUser((user, done) => {
    done(null, user)
})


//---- ROUTES

router.post('/login', passport.authenticate('login', {failureMessage: true}), postLogin);
router.post('/register', passport.authenticate('register', {failureMessage: true}), postRegister);
router.get('/logout', getLogout)

export { router };