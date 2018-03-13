import { Application, Response, Request } from "express";

import UserRoutes from './../../modules/user/user.routes';
import ClientRoutes from './../../modules/client/client.routes';


class Routes {

    constructor() { }

    getRoutes(app: Application) {

        // Routes Users
        app.route('/api/v1/users').get(UserRoutes.findAll);
        app.route('/api/v1/users/:id').get(UserRoutes.findById);
        app.route('/api/v1/users').post(UserRoutes.create);
        app.route('/api/v1/users/:id').put(UserRoutes.update);
        app.route('/api/v1/users/:id').delete(UserRoutes.remove);

        // Routes Clients
        app.route('/api/v1/clients').get(ClientRoutes.findAll);
        app.route('/api/v1/clients/:id').get(ClientRoutes.findById);
        app.route('/api/v1/clients').post(ClientRoutes.create);
        app.route('/api/v1/clients/:id').put(ClientRoutes.update);
        app.route('/api/v1/clients/:id').delete(ClientRoutes.remove);
    }
}

export default new Routes();