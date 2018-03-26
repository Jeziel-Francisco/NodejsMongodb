import { IProvider } from './../../entities/model/provider.model';

import ProviderRepository from './provider.repository';

class ProviderInfraestructure {
    constructor() { }

    findAll() {
        return ProviderRepository.find({});
    }

    create(provider: IProvider) {
        return new ProviderRepository(provider).save();
    }

    update(id: string, provider: IProvider) {
        return ProviderRepository.updateOne({ _id: id }, provider);
    }

    remove(id: string) {
        return ProviderRepository.deleteOne({ _id: id });
    }

}

export default new ProviderInfraestructure();