import { ExtractJwt, Strategy } from 'passport-jwt';
import { IUser } from './entities/model/user.model';

import UserInfraestructure from './modules/user/user.infraestructure';
import CONFIG from './config/config';

import * as passport from 'passport';

const authConfig = () => {
    let opts = {
        secretOrKey: CONFIG.secret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    };

    passport.use(new Strategy(opts, (jwtPayload, done) => {
        UserInfraestructure.findById(jwtPayload.id)
            .then((user: any) => {
                if (user) return done(null, { id: user.id, email: user.email });
                else return done(null, false);
            })
            .catch((error) => done(error, null));
    }));

    return {
        inicialize: () => passport.initialize(),
        authenticate: () => passport.authenticate('jwt', { session: false })
    };

}

export default authConfig;