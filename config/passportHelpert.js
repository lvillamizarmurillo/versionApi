import passport from "passport";
import {Strategy as BearerStrategy} from "passport-http-bearer";
import {validarToken} from "./JWT.js"

passport.use(new BearerStrategy(
    {passReqToCallback: true},
    async function(req,token,done){
        const autor = await validarToken(req,token)
        if(!autor) done(null,false);
        return done(null,autor);
    }
));
export default passport;