import { Application, Response, Request } from "express";

import UserRoutes from './../../modules/controllers/user.routes';


class Routes {

    constructor() { }

    getRoutes(app: Application) {

        // Routes Users
        app.route('/api/v1/users').get(UserRoutes.findAll);
        app.route('/api/v1/users/:id').get(UserRoutes.findById);
        app.route('/api/v1/users').post(UserRoutes.create);
        app.route('/api/v1/users/:id').put(UserRoutes.update);
        app.route('/api/v1/users/:id').delete(UserRoutes.delete);
    }
}

export default new Routes();