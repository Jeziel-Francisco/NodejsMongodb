import { Response } from 'express';

import { IUser, IUserDetail } from './../../entities/model/user.model';

import UserInfraestructure from './user.infraestructure';

import responseError from './../../common/common.response.error';
import responseSucess from './../../common/common.response.success';

import * as HttpStatus from 'http-status';

class UserBusiness {

    constructor() { }

    findAll(res: Response) {

        UserInfraestructure.findAll()
            .then((users: any[]) => responseSucess(res, HttpStatus.OK, users))
            .catch((error) => responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error));
    }

    findAllById(res: Response, id: string) {

        UserInfraestructure.findById(id)
            .then((user) => responseSucess(res, HttpStatus.OK, user))
            .catch((error) => responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error));
    }

    create(res: Response, user: IUserDetail) {

        UserInfraestructure.create(user)
            .then((created) => responseSucess(res, HttpStatus.OK, created))
            .catch((error) => responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, { err: error.message || error }));
    }

    update(res: Response, id: string, user: IUser) {

        UserInfraestructure.update(id, { firstName: user.firstName, lastName: user.lastName })
            .then((updated) => responseSucess(res, HttpStatus.OK, updated))
            .catch((error) => responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, { err: error.message || error }));
    }

    remove(res: Response, id: string) {

        UserInfraestructure.remove(id)
            .then((delected) => responseSucess(res, HttpStatus.OK, delected))
            .catch((error) => responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, { err: error.message || error }));
    }
}

export default new UserBusiness();