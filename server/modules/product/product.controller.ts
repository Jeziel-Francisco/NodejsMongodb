import { Request, Response } from 'express';

import UserBusiness from './product.business';

class ProductController {

    constructor() { }

    findAll(req: Request, res: Response) {
        UserBusiness.findAll(res);
    }

    create(req: Request, res: Response) {
        UserBusiness.create(res, req.body);
    }

    update(req: Request, res: Response) {
        UserBusiness.update(res, req.params.id, req.body);
    }

    remove(req: Request, res: Response) {
        console.log(req.params.id);
        UserBusiness.remove(res, req.params.id);
    }

}

export default new ProductController();