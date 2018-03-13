import * as mongoose from 'mongoose';


class DataBase {
    private DB_URI: string = 'mongodb://127.0.0.1/ts-rest-api';
    private DB_CONNECTION;

    constructor() { }

    closeConnection(message: string, callback) {
        this.DB_CONNECTION.close(() => {
            console.log(`Mongoose foi desconectado pelo seguinte Motivo: ${message}`);
            callback();
        });
    }

    createConnection() {
        mongoose.connect(this.DB_URI);
        this.logger(this.DB_URI);
    }

    logger(uri: string) {
        this.DB_CONNECTION = mongoose.connection;
        this.DB_CONNECTION.on('connected', () => console.log(`Mongoose esta sendo executado na URI ${uri}`));
        this.DB_CONNECTION.on('error', (err) => console.error.bind(console, ` Erro na Conexão ${err}`));
        this.DB_CONNECTION.on('disconnected', () => console.log(`Mongoose esta Desconectando do ${uri}`));
    }

}

export default new DataBase();