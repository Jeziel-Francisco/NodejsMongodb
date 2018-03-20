import { findById, create, remove, update } from './../../entities/model/client.model';

import { Request, Response } from 'express';

import responseError from './../../common/common.response.error';

import * as HttpStatus from 'http-status';

class ClientMiddleware {

    constructor() { }

    findById(req: Request, res: Response, next) {
        try {
            findById(req.params.id);
            return next();
        } catch (error) {
            responseError(res, HttpStatus.BAD_REQUEST, error.message);
        }
    }

    create(req: Request, res: Response, next) {
        try {
            create(req.body);
            next();
        } catch (error) {
            responseError(res, HttpStatus.BAD_REQUEST, error.message);
        }
    }

    update(req: Request, res: Response, next) {
        try {
            update(req.params.id, req.body);
            next();
        } catch (error) {
            responseError(res, HttpStatus.BAD_REQUEST, error.message);
        }
    }

    remove(req: Request, res: Response, next) {
        try {
            remove(req.params.id);
            next();
        } catch (error) {
            responseError(res, HttpStatus.BAD_REQUEST, error.message);
        }
    }
}

export default new ClientMiddleware();
