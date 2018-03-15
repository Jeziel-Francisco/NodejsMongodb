import { Response } from 'express';

function responseSucess(res: Response, statusCode, data) {
    res.status(statusCode).json(data);
}

export default responseSucess;