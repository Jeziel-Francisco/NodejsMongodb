import { Application, Response, Request } from "express";

import UserRoutes from './../../modules/user/user.routes';
import ClientRoutes from './../../modules/client/client.routes';

import UserMiddleware from './../../modules/user/user.middleware';
import ClientMiddleware from './../../modules/client/client.middleware';

class Routes {

    constructor() { }

    getRoutes(app: Application) {

        // Routes Users
        app.route('/api/v1/users').get(UserRoutes.findAll);
        app.route('/api/v1/users/:id').get(UserMiddleware.findById, UserRoutes.findById);
        app.route('/api/v1/users').post(UserMiddleware.create, UserRoutes.create);
        app.route('/api/v1/users/:id').put(UserMiddleware.update, UserRoutes.update);
        app.route('/api/v1/users/:id').delete(UserMiddleware.remove, UserRoutes.remove);

        // Routes Clients
        app.route('/api/v1/clients').get(ClientRoutes.findAll);
        app.route('/api/v1/clients/:id').get(ClientMiddleware.findById, ClientRoutes.findById);
        app.route('/api/v1/clients').post(ClientMiddleware.create, ClientRoutes.create);
        app.route('/api/v1/clients/:id').put(ClientMiddleware.update, ClientRoutes.update);
        app.route('/api/v1/clients/:id').delete(ClientMiddleware.remove, ClientRoutes.remove);
    }
}

export default new Routes();