import { Response } from 'express';

import * as jwtSimple from 'jwt-simple';
import * as HttpStatus from 'http-status';
import CONFIG from './../config/config';

const authSuccess = (res: Response, credentials: any, data: any) => {
    const isMath = (credentials.password == data.password);

    if (isMath) {
        const payload = { id: data.id };
        res.json({
            token: jwtSimple.encode(payload, CONFIG.secret)
        });
    } else res.sendStatus(HttpStatus.UNAUTHORIZED);
}

export default authSuccess;