"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_routes_1 = require("./../../modules/controllers/user.routes");
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.prototype.getRoutes = function (app) {
        // Routes Users
        app.route('/api/v1/users').get(user_routes_1.default.findAll);
        app.route('/api/v1/users/:id').get(user_routes_1.default.findById);
        app.route('/api/v1/users').post(user_routes_1.default.create);
        app.route('/api/v1/users/:id').put(user_routes_1.default.update);
        app.route('/api/v1/users/:id').delete(user_routes_1.default.delete);
    };
    return Routes;
}());
exports.default = new Routes();
