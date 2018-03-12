import { ForcePassword, IsEmail, IsEqual, IsLength, PropertyExists } from './../common/common.assert';

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

function FindById(id) {
    IsLength(id, 24, 24, 'Usuario Nao encontrado');
}

function Create(email: string, firstName: string, lastName: string, password: string, confirmPassword: string) {

    let user = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
        confirmPassword: confirmPassword
    };

    PropertyExists(['email', 'firstName', 'lastName', 'password', 'confirmPassword'], user);

    IsEmail(email, 'Email Invalido');

    IsLength(firstName, 3, 50, 'Nome deve ter entre 3 e 50 caracteres');

    IsLength(lastName, 3, 50, 'Sobrenome deve conter entre 3 e 50 caracteres');

    IsLength(password, 8, 1028, 'Senha deve ter no minimo 8 caracteres');
    IsEqual(password, confirmPassword, 'Senhas Não Conferem');
    ForcePassword(password, 'Senha não atende aos requistos Minimos');
}

function Update(firstName: string, lastName: string) {

    let userUpdated = {
        firstName: firstName,
        lastName: lastName
    };

    PropertyExists(['firstName', 'lastName'], userUpdated);

    IsLength(firstName, 3, 50, 'Nome deve ter entre 3 e 50 caracteres');

    IsLength(lastName, 3, 50, 'Sobrenome deve conter entre 3 e 50 caracteres');
}

function UpdateEmail(email: string, confirmEmail: string, ) {
    IsEmail(email, 'Email Invalido');
    IsEqual(email, confirm, 'Email Não Conferem');
}

function UpdatePassword(password: string, confirmPassword: string) {
    IsLength(password, 8, 1028, 'Senha deve ter no minimo 8 caracteres');
    IsEqual(password, confirmPassword, 'Senhas Não Conferem');
    ForcePassword(password, 'Senha não atende aos requistos Minimos');
}


function Delete(id: string) {
    IsLength(id, 24, 24, 'Usuario Nao encontrado');
}


export { IUser, IUserDetail, FindById, Create, Update, UpdateEmail, UpdatePassword, Delete };