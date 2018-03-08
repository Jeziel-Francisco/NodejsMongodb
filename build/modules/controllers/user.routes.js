"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpStatus = require("http-status");
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
    }
    UserRoutes.prototype.findAll = function (req, res) {
        res.status(HttpStatus.OK).json({ message: "FindAll Sucesso" });
    };
    UserRoutes.prototype.findById = function (req, res) {
        res.status(HttpStatus.OK).json({ message: "FindById " + req.params.id + " Sucesso" });
    };
    UserRoutes.prototype.create = function (req, res) {
        res.status(HttpStatus.OK).json({ message: "Created Sucesso" });
    };
    UserRoutes.prototype.update = function (req, res) {
        res.status(HttpStatus.OK).json({ message: "Updated id " + req.params.id + " Sucesso" });
    };
    UserRoutes.prototype.delete = function (req, res) {
        res.status(HttpStatus.OK).json({ message: "Deleted id " + req.params.id + " Sucesso" });
    };
    return UserRoutes;
}());
exports.default = new UserRoutes();
