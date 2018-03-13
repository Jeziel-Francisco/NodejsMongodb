import { IUser, IUserDetail } from './user.model';

import UserRepository from './user.repository';

class UserInfraestructure {

    constructor() { }

    findAll() {
        return UserRepository.find({});
    }

    findById(id: string) {
        return UserRepository.findById(id);
    }

    create(user: IUserDetail) {
        return UserRepository.create(user);
    }

    update(id: string, user: any) {
        return UserRepository.findByIdAndUpdate(id, user);
    }

    remove(id: string) {
        return UserRepository.findByIdAndRemove(id);
    }

}

export default new UserInfraestructure();