import { IClient } from './client.model';

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
        return ClientRepository.create(client);
    }

    update(id: string, client: IClient) {
        return ClientRepository.findByIdAndUpdate(id, client);
    }

    remove(id: string) {
        return ClientRepository.findByIdAndRemove(id);
    }
}

export default new ClientInfraestructure();