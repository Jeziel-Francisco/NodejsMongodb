import { IProduct } from './../../entities/model/product.model';

import ProductRepository from './product.repository';

class ProductInfraestructure {
    constructor() { }

    findAll() {
        return ProductRepository.find({});
    }

    create(product: IProduct) {
        return new ProductRepository(product).save();
    }

    update(id: string, product: IProduct) {
        return ProductRepository.updateOne({ _id: id }, product);
    }

    remove(id: string) {
        return ProductRepository.deleteOne({ _id: id });
    }

}

export default new ProductInfraestructure();