import { Request, Response } from 'express';

import ClientBusiness from './client.business';


class ClientController {
    constructor() { }

    findAll(req: Request, res: Response) {
        ClientBusiness.findAll(res);
    }

    findById(req: Request, res: Response) {
        ClientBusiness.findById(res, req.params.id);
    }

    create(req: Request, res: Response) {
        ClientBusiness.create(res, req.body);
    }

    update(req: Request, res: Response) {
        ClientBusiness.update(res, req.params.id, req.body);
    }

    remove(req: Request, res: Response) {
        ClientBusiness.remove(res, req.params.id);
    }

}

export default new ClientController();