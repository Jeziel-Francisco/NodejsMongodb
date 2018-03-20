import { findById, create, update, updateEmail, updatePassword, remove } from './../../entities/model/user.model';

import { Request, Response } from 'express';

import * as HttpStatus from 'http-status';

import responseError from './../../common/common.response.error';


class userMiddleware {

    constructor() { }

    findById(req: Request, res: Response, next) {
        try {
            findById(req.params.id);
            return next();
        } catch (error) {
            responseError(res, HttpStatus.BAD_REQUEST, { err: error.message });
        }
    }

    create(req: Request, res: Response, next) {
        try {
            create(req.body);
            return next();
        } catch (error) {
            responseError(res, HttpStatus.BAD_REQUEST, { err: error.message });
        }
    }

    update(req: Request, res: Response, next) {
        try {
            update(req.body);
            return next();
        } catch (error) {
            responseError(res, HttpStatus.BAD_REQUEST, { err: error.message });
        }
    }

    remove(req: Request, res: Response, next) {
        try {
            remove(req.params.id);
            return next();
        } catch (error) {
            responseError(res, HttpStatus.BAD_REQUEST, { err: error.message });
        }
    }
}

export default new userMiddleware();