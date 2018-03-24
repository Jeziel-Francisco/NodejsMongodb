import { Request, Response } from 'express';
import { IProduct } from './../../entities/model/product.model';

import ProductInfraestructure from './product.infraestructure';
import responseSuccess from './../../common/common.response.success';
import responseError from './../../common/common.response.error';

import * as HttpStatus from 'http-status';

class ProductBusiness {

    constructor() { }

    findAll(res: Response) {
        ProductInfraestructure.findAll()
            .then((products: [any]) => responseSuccess(res, HttpStatus.OK, products))
            .catch((error: any) => responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error));
    }

    create(res: Response, product: IProduct) {
        ProductInfraestructure.create(product)
            .then((created: any) => responseSuccess(res, HttpStatus.CREATED, created))
            .catch((error: any) => responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error));
    }

    update(res: Response, id: string, product: IProduct) {
        ProductInfraestructure.update(id, product)
            .then((updated: any) => responseSuccess(res, HttpStatus.OK, updated))
            .catch((error: any) => responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error));
    }

    remove(res: Response, id: string) {
        ProductInfraestructure.remove(id)
            .then((delected: any) => responseSuccess(res, HttpStatus.OK, delected))
            .catch((error: any) => responseError(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error));
    }

}

export default new ProductBusiness();