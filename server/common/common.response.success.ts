import { Response } from 'express';

const responseSucess = (res: Response, statusCode, data) => {
    res.status(statusCode).json(data);
}

export default responseSucess;