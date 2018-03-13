import { Request, Response } from 'express';

import UserBusiness from './user.business';


class UserController {

    constructor() { }

    findAll(req: Request, res: Response) {
        UserBusiness.findAll(res);
    }

    findAllById(req: Request, res: Response) {
        UserBusiness.findAllById(res, req.params.id);
    }

    create(req: Request, res: Response) {
        UserBusiness.create(res, req.body);
    }

    update(req: Request, res: Response) {
        UserBusiness.update(res, req.params.id, req.body);
    }

    remove(req: Request, res: Response) {
        UserBusiness.remove(res, req.params.id);
    }
}

export default new UserController();