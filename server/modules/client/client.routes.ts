import { Request, Response } from 'express';

import ClientController from './client.controller';

class ClientRoutes {
    findAll(req: Request, res: Response) {
        ClientController.findAll(req, res);
    }

    findById(req: Request, res: Response) {
        ClientController.findById(req, res);
    }

    create(req: Request, res: Response) {
        ClientController.create(req, res);
    }

    update(req: Request, res: Response) {
        ClientController.update(req, res);
    }

    remove(req: Request, res: Response) {
        ClientController.remove(req, res);
    }
}

export default new ClientRoutes();