"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("./routes/routes");
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.middleware(this.app);
        this.routes(this.app);
    }
    App.prototype.middleware = function (app) {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
    };
    App.prototype.routes = function (app) {
        routes_1.default.getRoutes(app);
    };
    return App;
}());
exports.default = new App();