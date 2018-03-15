import { Response } from 'express';


function responseError(res: Response, statusCode, error) {
    res.status(statusCode).json(error);
}


export default responseError;