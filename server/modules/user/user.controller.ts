import User from './user.repository';

class UserController {

    constructor() { }

    findAll() {
        return User.find({});
    }

    findAllById(id: string) {
        return User.findById(id);
    }

    create(user) {
        return User.create(user);
    }

    update(id: string, user) {
        let userUpdated = {
            name: user.name,
            email: user.email,
            password: user.password
        };

        return User.update(id, user);
    }

    delete(id: string) {
        return User.deleteOne(id);
    }
}

export default new UserController();