import { Request, Response } from 'express';

import { IUser, IUserDetail, FindById, Create, Update, UpdateEmail, UpdatePassword, Delete } from './user.model';

import UserRepository from './user.repository';

import responseSucess from './../../responses/response.success';
import responseError from './../../responses/response.error';

import * as HttpStatus from 'http-status';

class UserBusiness {

    constructor() { }

    findAll(res: Response) {
        UserRepository.find({})
            .then((users: any[]) => responseSucess(res, HttpStatus.OK, users))
            .catch((error) => responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message));
    }

    findAllById(res: Response, id: string) {
        try {
            FindById(id);
        } catch (error) {
            responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, { err: error.message });
        }
        UserRepository.findById(id)
            .then((user) => responseSucess(res, HttpStatus.OK, user))
            .catch((error) => responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message));
    }

    create(res: Response, user: IUserDetail) {
        try {
            Create(user.email, user.firstName, user.lastName, user.password, user.confirmPassword);
        } catch (error) {
            responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, { err: error.message });
        }
        UserRepository.create(user)
            .then((user) => responseSucess(res, HttpStatus.OK, user))
            .catch((err) => responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, { err: err.message }));
    }

    update(res: Response, id: string, user: IUser) {

        let userUpdated = {
            firstName: user.firstName,
            lastName: user.lastName,
        };

        try {
            Update(userUpdated.firstName, userUpdated.lastName);
        } catch (error) {
            responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, { err: error.message });
        }

        UserRepository.updateOne({ _id: id }, userUpdated)
            .then((updated) => responseSucess(res, HttpStatus.OK, updated))
            .catch((err) => responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, { err: err.message }));
    }

    delete(res: Response, id: string) {
        try {
            Delete(id);
        } catch (error) {
            responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, { err: error.message });
        }

        UserRepository.deleteOne({ _id: id })
            .then((delected) => responseSucess(res, HttpStatus.OK, delected))
            .catch((err) => responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, { err: err.message }));
    }
}

export default new UserBusiness();