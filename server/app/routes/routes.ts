import { Application, Response, Request } from "express";

import UserController from './../../modules/user/user.controller';
import ClientController from './../../modules/client/client.controller';
import ProductController from './../../modules/product/product.controller';
import ProviderController from './../../modules/provider/provider.controller';

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

        app.route('/api/v1/security/token')
            .post(TokenRoutes.auth);


        // Routes Users
        
        // Rota que retorno todos os usurios
        app.route('/api/v1/users')
            .all(this.auth.authenticate())
            .get(UserController.findAll);
        //Rota Retorna usuario unico pelo id
        app.route('/api/v1/users/:id')
            .all(this.auth.authenticate())
            .get(UserMiddleware.findById, UserController.findById);
        // Rota de Cadastro de Usuarios
        app.route('/api/v1/users')
            .all(this.auth.authenticate())
            .post(UserMiddleware.create, UserController.create);
        // Rota de Alteracao de usuario
        app.route('/api/v1/users/:id')
            .all(this.auth.authenticate())
            .put(UserMiddleware.update, UserController.update);
        //Rota para Remover Usuario
        app.route('/api/v1/users/:id')
            .all(this.auth.authenticate())
            .delete(UserMiddleware.remove, UserController.remove);


        // Routes Clients

        //Rota para consultar todos Clientes
        app.route('/api/v1/clients')
            .all(this.auth.authenticate())
            .get(ClientController.findAll);
        //Rota para consultar usuario unico pelo id Clientes
        app.route('/api/v1/clients/:id')
            .all(this.auth.authenticate())
            .get(ClientMiddleware.findById, ClientController.findById);
        //Rota para Cadastrar Clientes
        app.route('/api/v1/clients')
            .all(this.auth.authenticate())
            .post(ClientMiddleware.create, ClientController.create);
        //Rota para Alterar Clietes
        app.route('/api/v1/clients/:id')
            .all(this.auth.authenticate())
            .put(ClientMiddleware.update, ClientController.update);
        //Rota para Remover Clientes
        app.route('/api/v1/clients/:id')
            .all(this.auth.authenticate())
            .delete(ClientMiddleware.remove, ClientController.remove);


        // Products
        //Rota para Consultar todos Produtos
        app.route('/api/v1/products')
            .all(this.auth.authenticate())
            .get(ProductController.findAll);
        //Rota para Cadastrar Produtos
        app.route('/api/v1/products')
            .all(this.auth.authenticate())
            .post(ProductController.create);
        //Rota para Alterar Produtos
        app.route('/api/v1/products/:id')
            .all(this.auth.authenticate())
            .put(ProductController.update);
        //Rota para Remover Produtos
        app.route('/api/v1/products/:id')
            .all(this.auth.authenticate())
            .delete(ProductController.remove);

        // Providers
        //Rota para Consulta todos Fornecedores
        app.route('/api/v1/providers')
            .all(this.auth.authenticate())
            .get(ProviderController.findAll);
        //Rota para Cadastrar Fornecedores
        app.route('/api/v1/providers')
            .all(this.auth.authenticate())
            .post(ProviderController.create);
        //Rota para Alterar Fornecedores
        app.route('/api/v1/providers/:id')
            .all(this.auth.authenticate())
            .put(ProviderController.update);
        //Rota para Remover Fornecedores
        app.route('/api/v1/providers/:id')
            .all(this.auth.authenticate())
            .delete(ProviderController.remove);
    }
}

export default new Routes();