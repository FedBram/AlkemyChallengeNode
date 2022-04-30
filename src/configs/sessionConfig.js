import SequelizeStore from 'connect-session-sequelize';
import session from 'express-session';
import dotenv from 'dotenv';
dotenv.config()

import { sequelize } from '../db/config/sequelizeConfig.js';

const SequelizeSessionStore = SequelizeStore(session.Store)

const sessionConfig = {
    secret: process.env.SESSION_SECRET,
    store: new SequelizeSessionStore({
      db: sequelize,
    }),
    resave: true,
    saveUninitialized: false,
    proxy: true,
    checkExpirationInterval: 60*15*1000,
    expiration: 60*60*1000
}

export default sessionConfig