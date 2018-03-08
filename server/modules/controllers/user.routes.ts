import { Request, Response, json } from 'express';

import * as HttpStatus from 'http-status';

class UserRoutes {

    findAll(req: Request, res: Response) {
        res.status(HttpStatus.OK).json({ message: `FindAll Sucesso` });
    }

    findById(req: Request, res: Response) {
        res.status(HttpStatus.OK).json({ message: `FindById ${req.params.id} Sucesso` });
    }

    create(req: Request, res: Response) {
        res.status(HttpStatus.OK).json({ message: `Created Sucesso` });
    }

    update(req: Request, res: Response) {
        res.status(HttpStatus.OK).json({ message: `Updated id ${req.params.id} Sucesso` });
    }

    delete(req: Request, res: Response) {
        res.status(HttpStatus.OK).json({ message: `Deleted id ${req.params.id} Sucesso` });
    }
}

export default new UserRoutes();