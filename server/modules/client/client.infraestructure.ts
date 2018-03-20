import { IClient } from './../../entities/model/client.model';

import ClientRepository from './client.repository';

class ClientInfraestructure {

    constructor() { }

    findAll() {
        return ClientRepository.find({});
    }

    findById(id: string) {

        return ClientRepository.findById(id);
    }

    create(client: IClient) {
        return new ClientRepository(client).save();
        //return ClientRepository.create(client);
    }

    update(id: string, client: IClient) {
        return ClientRepository.update({ _id: id }, client);
    }

    remove(id: string) {
        return ClientRepository.remove({ _id: id });
    }
}

export default new ClientInfraestructure();