import { Application } from 'express';

import Routes from './routes/routes';

import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

class App {

    public app: Application;
    private morgan: morgan.Morgan;
    private bodyParser;

    constructor() {
        this.app = express();
        this.middleware(this.app);
        this.routes(this.app);
    }

    middleware(app: Application) {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(bodyParser.json());
    }

    routes(app: Application) {
        Routes.getRoutes(app);
    }

}

export default new App();