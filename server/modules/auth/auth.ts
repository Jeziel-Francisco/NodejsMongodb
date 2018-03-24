import { Request, Response } from 'express';

import UserInfraestructure from './../user/user.infraestructure';
import authSuccess from './../../common/common.auth.success';
import authFail from './../../common/common.auth.fail';


import * as _ from 'lodash';

class TokenRoutes {
    auth(req: Request, res: Response) {
        const credentials = {
            email: req.body.email,
            password: req.body.password
        };

        if (credentials.hasOwnProperty('email') && credentials.hasOwnProperty('password')) {
            UserInfraestructure.findByEmail(credentials.email)
                .then(_.partial(authSuccess, res, credentials))
                .catch(_.partial(authSuccess, res, credentials));
        }
    }
}

export default new TokenRoutes();