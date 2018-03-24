import { Application, Response, Request } from "express";

import UserController from './../../modules/user/user.controller';
import ClientController from './../../modules/client/client.controller';
import ProductController from './../../modules/product/product.controller';

import UserMiddleware from './../../modules/user/user.middleware';
import ClientMiddleware from './../../modules/client/client.middleware';
import TokenRoutes from './../../modules/auth/auth';

class Routes {

    private auth;

    constructor() { }


    getRoutes(app: Application, auth: any) {

        // Recebe parametro Auth e atribui para a propriedade auth local
        this.auth = auth;

        // Routes Authorization

        app.route('/api/v1/security/token').post(TokenRoutes.auth);
        app.route('/teste/:id').all(this.auth.authenticate()).get((req: Request, res: Response) => {
            res.json({ success: true, id: req.params.id });
        })

        // Routes Users
        app.route('/api/v1/users').all(this.auth.authenticate()).get(UserController.findAll);
        app.route('/api/v1/users/:id').all(this.auth.authenticate()).get(UserMiddleware.findById, UserController.findById);
        app.route('/api/v1/users').all(this.auth.authenticate()).post(UserMiddleware.create, UserController.create);
        app.route('/api/v1/users/:id').all(this.auth.authenticate()).put(UserMiddleware.update, UserController.update);
        app.route('/api/v1/users/:id').all(this.auth.authenticate()).delete(UserMiddleware.remove, UserController.remove);

        // Routes Clients
        app.route('/api/v1/clients').all(this.auth.authenticate()).get(ClientController.findAll);
        app.route('/api/v1/clients/:id').all(this.auth.authenticate()).get(ClientMiddleware.findById, ClientController.findById);
        app.route('/api/v1/clients').all(this.auth.authenticate()).post(ClientMiddleware.create, ClientController.create);
        app.route('/api/v1/clients/:id').all(this.auth.authenticate()).put(ClientMiddleware.update, ClientController.update);
        app.route('/api/v1/clients/:id').all(this.auth.authenticate()).delete(ClientMiddleware.remove, ClientController.remove);

        // Products

        app.route('/api/v1/products').all(this.auth.authenticate()).get(ProductController.findAll);
        app.route('/api/v1/products').all(this.auth.authenticate()).post(ProductController.create);
        app.route('/api/v1/products/:id').all(this.auth.authenticate()).put(ProductController.update);
        app.route('/api/v1/products/:id').all(this.auth.authenticate()).delete(ProductController.remove);
    }
}

export default new Routes();