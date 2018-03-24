import { Request, Response } from 'express';

import * as HttpStatus from 'http-status';

const authFail = (req: Request, res: Response) => {
    res.sendStatus(HttpStatus.UNAUTHORIZED);
}

export default authFail;