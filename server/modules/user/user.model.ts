import { forcePassword, isEmail, isEqual, isLength, propertyExists } from './../common/common.assert';

interface IUser {
    createdAt: Date;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}

interface IUserDetail extends IUser {
    confirmPassword: string;
}

function findById(id) {
    isLength(id, 24, 24, 'Usuario Nao encontrado');
}

function create(user: IUserDetail) {

    propertyExists(['email', 'firstName', 'lastName', 'password', 'confirmPassword'], user);

    isEmail(user.email, 'Email Invalido');

    isLength(user.firstName, 3, 50, 'Nome deve ter entre 3 e 50 caracteres');

    isLength(user.lastName, 3, 50, 'Sobrenome deve conter entre 3 e 50 caracteres');

    isLength(user.password, 8, 1028, 'Senha deve ter no minimo 8 caracteres');
    isEqual(user.password, user.confirmPassword, 'Senhas Não Conferem');
    forcePassword(user.password, 'Senha não atende aos requistos Minimos');
}

function update(user: IUser) {

    propertyExists(['firstName', 'lastName'], user);

    isLength(user.firstName, 3, 50, 'Nome deve ter entre 3 e 50 caracteres');

    isLength(user.lastName, 3, 50, 'Sobrenome deve conter entre 3 e 50 caracteres');
}

function updateEmail(email: string, confirmEmail: string ) {
    isEmail(email, 'Email Invalido');
    isEqual(email, confirm, 'Email Não Conferem');
}

function updatePassword(password: string, confirmPassword: string) {
    isLength(password, 8, 1028, 'Senha deve ter no minimo 8 caracteres');
    isEqual(password, confirmPassword, 'Senhas Não Conferem');
    forcePassword(password, 'Senha não atende aos requistos Minimos');
}


function remove(id: string) {
    isLength(id, 24, 24, 'Usuario Nao encontrado');
}


export { IUser, IUserDetail, findById, create, update, updateEmail, updatePassword, remove };