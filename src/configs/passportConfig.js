import bcrypt from "bcryptjs";
import { user } from "../db/modelExports.js";
import { sendMail } from "./sendGridMailConfig.js";

const passportConfig = {};

passportConfig.fields = {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}

passportConfig.login = async (req, email, password, done) => {
    let userExist = await user.findOne({where: {email: email}});
    if(!userExist){
        const error = {
            url: req.orinalUrl,
            method: req.method,
            status: 403,
            error: 'User not found'
        };
        console.log(error);
        return done(null, false);
    }else{
        const match = bcrypt.compareSync(password, userExist.password);
        if(match){
            return done(null, userExist)
        }else{
            const error = {
                url: req.originalUrl,
                method: req.method,
                status: 403,
                error: `Wrong password`
            };
            console.log(error)
            return done(null, false)
        }
    }
}

passportConfig.register = async (req, email, password, done) => {
    let userExist = await user.findOne({where: {email: email}});
    console.log(userExist)
    if(userExist){
        const error = {
            url: req.originalUrl,
            method: req.method,
            error: "User already exist"
        }
        console.log(error)
        return done(null, false)
    }else{
        let newUser = {
            email: email,
            password: bcrypt.hashSync(password, 10)
        }
        sendMail(newUser)
        await user.create(newUser);
        return done(null, newUser)
    }
}

export default passportConfig