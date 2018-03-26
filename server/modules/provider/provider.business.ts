import { Response } from 'express';

import { IProvider } from './../../entities/model/provider.model';

import ProviderInfraestructure from './provider.infraestructure';
import responseSuccess from './../../common/common.response.success';
import responseError from './../../common/common.response.error';

import * as HttpStatus from 'http-status';

class ProviderBusiness {
    constructor() { }

    findAll(res: Response) {
        ProviderInfraestructure.findAll()
            .then((providers: [any]) => responseSuccess(res, HttpStatus.CREATED, providers))
            .catch((error) => responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error));
    }

    create(res: Response, provider: IProvider) {
        ProviderInfraestructure.create(provider)
            .then((provider) => responseSuccess(res, HttpStatus.CREATED, provider))
            .catch((error) => responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error));
    }

    update(res: Response, id: string, provider: IProvider) {
        ProviderInfraestructure.update(id, provider)
            .then((updated) => responseSuccess(res, HttpStatus.CREATED, updated))
            .catch((error) => responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error));
    }

    remove(res: Response, id: string) {
        ProviderInfraestructure.remove(id)
            .then((removed) => responseSuccess(res, HttpStatus.CREATED, removed))
            .catch((error) => responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error));
    }

}

export default new ProviderBusiness();