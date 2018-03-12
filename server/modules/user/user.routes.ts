import { Request, Response, json } from 'express';

import UserController from './user.controller';

class UserRoutes {

    findAll(req: Request, res: Response) {
        UserController.findAll(req, res);
    }

    findById(req: Request, res: Response) {
        UserController.findAllById(req, res);
    }

    create(req: Request, res: Response) {
        UserController.create(req, res);
    }

    update(req: Request, res: Response) {
        UserController.update(req, res);
    }

    delete(req: Request, res: Response) {
        UserController.delete(req, res);
    }
}

export default new UserRoutes();