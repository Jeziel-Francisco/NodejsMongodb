import { Request, Response, json } from 'express';

import UserController from './user.controller';

import responseSucess from './../../responses/response.success';

import * as HttpStatus from 'http-status';

class UserRoutes {

    findAll(req: Request, res: Response) {
        UserController.findAll()
            .then((users: any[]) => responseSucess(res, HttpStatus.OK, users));
    }

    findById(req: Request, res: Response) {
        UserController.findAllById(req.params.id)
            .then((user) => responseSucess(res, HttpStatus.OK, user));
    }

    create(req: Request, res: Response) {
        UserController.create(req.body)
            .then(() => responseSucess(res, HttpStatus.OK, { success: 'Success' }));
    }

    update(req: Request, res: Response) {
        UserController.update(req.params.id, req.body)
            .then(() => responseSucess(res, HttpStatus.OK, { success: 'Success' }));
    }

    delete(req: Request, res: Response) {
        UserController.delete(req.params.id)
            .then(() => responseSucess(res, HttpStatus.OK, { success: 'Success' }));
    }
}

export default new UserRoutes();