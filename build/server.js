"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app/app");
app_1.default.app.listen(3000, function () {
    console.log('Servidor rodando na Porta 3000');
});
process.once('SIGUSR2', function () { return app_1.default.dataBaseClose('nodemon restart', function () { return process.kill(process.pid, 'SIGUSR2'); }); });
process.on('SIGINT', function () { return app_1.default.dataBaseClose('Execução Interrompida', function () { return process.exit(0); }); });
