import { Response } from 'express';


const responseError = (res: Response, statusCode, error) => {
    res.status(statusCode).json(error);
}


export default responseError;