import { Response } from 'express';

export default function responseSucess(res: Response, statusCode, data) {
    res.status(statusCode).json(data);
}