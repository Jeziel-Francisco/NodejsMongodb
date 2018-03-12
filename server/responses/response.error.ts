import { Response } from 'express';


function ResponseError(res: Response, statusCode, error) {
    res.status(statusCode).json(error);
}


export default ResponseError;