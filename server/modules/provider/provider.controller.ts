import { Request, Response } from 'express';

import ProviderBusiness from './provider.business';

class ProviderController {
    constructor() { }

    findAll(req: Request, res: Response) {
        ProviderBusiness.findAll(res);
    }

    create(req: Request, res: Response) {
        ProviderBusiness.create(res, req.body);
    }

    update(req: Request, res: Response) {
        ProviderBusiness.update(res, req.params.id, req.body);
    }

    remove(req: Request, res: Response) {
        ProviderBusiness.remove(res, req.params.id);
    }
}


export default new ProviderController();