import { IUser, IUserDetail } from './../../entities/model/user.model';

import UserRepository from './user.repository';

class UserInfraestructure {

    constructor() { }

    findAll() {
        return UserRepository.find({});
    }

    findById(id: string) {
        return UserRepository.findById(id);
    }

    findByEmail(email: string) {
        return UserRepository.findOne({ email: email });
    }

    create(user: IUserDetail) {
        return UserRepository.create(user);
    }

    update(id: string, user: any) {
        return UserRepository.update({ _id: id }, user);
    }

    remove(id: string) {
        return UserRepository.remove({ _id: id });
    }

}

export default new UserInfraestructure();