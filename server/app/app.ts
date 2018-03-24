import { Application } from 'express';

import DataBase from './../config/db';
import Routes from './routes/routes';
import authConfig from './../auth';

import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

class App {
    public auth;

    public app: Application;
    private morgan: morgan.Morgan;
    private bodyParser;

    constructor() {
        this.app = express();
        this.auth = authConfig();
        this.middleware(this.app);
        this.routes(this.app, this.auth);
        this.dataBaseConnection();
    }

    dataBaseConnection() {
        DataBase.createConnection();
    }

    dataBaseClose(message: string, callback) {
        DataBase.closeConnection(message, () => callback());
    }

    middleware(app: Application) {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(bodyParser.json());
        this.app.use(this.auth.inicialize());
    }

    routes(app: Application, auth: any) {
        Routes.getRoutes(app, auth);
    }

}

export default new App();
