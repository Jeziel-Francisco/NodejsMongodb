import { Response } from 'express';

import { IClient } from './../../entities/model/client.model';

import ClientInfraestructure from './client.infraestructure';

import responseError from './../../common/common.response.error';
import responseSuccess from './../../common/common.response.success';

import * as HttpStatus from 'http-status';


class ClientBusiness {

    constructor() { }

    findAll(res: Response) {
        ClientInfraestructure.findAll()
            .then((clients: any[]) => responseSuccess(res, HttpStatus.OK, clients))
            .catch((error) => responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error));
    }

    findById(res: Response, id: string) {

        ClientInfraestructure.findById(id)
            .then((client: any) => responseSuccess(res, HttpStatus.OK, client))
            .catch((error) => responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error));
    }

    create(res: Response, client: IClient) {

        ClientInfraestructure.create(client)
            .then((created) => responseSuccess(res, HttpStatus.CREATED, created))
            .catch((error) => responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error));
    }

    update(res: Response, id: string, client: IClient) {

        ClientInfraestructure.update(id, client)
            .then((updated) => responseSuccess(res, HttpStatus.OK, updated))
            .catch((error) => responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error));
    }

    remove(res: Response, id: string) {

        ClientInfraestructure.remove(id)
            .then((deleted) => responseSuccess(res, HttpStatus.OK, deleted))
            .catch((error) => responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error));
    }

}

export default new ClientBusiness();