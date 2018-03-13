import { isLength, propertyExists } from './../common/common.assert';

interface IClient {
    address: {
        city: string,
        code: number,
        number: number,
        complement: string,
        neighborhood: string,
        place: string,
        state: string
    };
    createdAt: Date;
    firstName: string;
    identification: string,
    lastName: string;
    phone: [{
        contact: string,
        ddd: number,
        number: number
    }];
    registration: string;

}

function findById(id: string) {
    isLength(id, 24, 24, 'Usuario não encontrado');
}

function create(client: IClient) {
    propertyExists(['firstName', 'identification', 'lastName'], client);

    isLength(client.address.city, 3, 120, 'Cidade deve conter entre 3 e 120 letras');

    //isLength(client.address.code, 8, 8, 'Cep deve conter 8 numeros');

    //isLength(client.address.number, 1, 10, 'Number deve conter entre 1 e 10 numeros');

    isLength(client.address.complement, 3, 120, 'Complemento deve conter entre 3 e 120 letras');

    isLength(client.address.neighborhood, 3, 120, 'Bairro deve conter entre 3 e 120 letras');

    isLength(client.address.place, 3, 120, 'Rua deve conter entre 3 e 120 letras');

    isLength(client.address.state, 2, 60, 'Estado deve conter entre 2 e 60 letras');

    isLength(client.firstName, 3, 60, 'Nome deve conter entre 3 e 60 Letras');

    isLength(client.identification, 11, 14, 'Identidade deve conter entre 11 e 14 numeros');

    isLength(client.lastName, 3, 60, 'Sobrenome deve conter entre 3 e 60 letras');

    client.phone.forEach((phone, index) => {
        propertyExists(['ddd', 'number'], phone);
        //isLength(phone.ddd, 2, 3, 'DDD deve conter entre 2 e 3 Numberos');
        isLength(phone.number, 8, 9, 'Telefone deve conter entre 8 e 9 Numbros');
    });

    isLength(client.registration, 5, 9, 'Inscrição estadual deve Conter entre 5 e 9 Numeros');
}

function update(id: string, client: IClient) {
    isLength(id, 24, 24, 'Cliente não encontrado');
    create(client);
}

function remove(id: string) {
    isLength(id, 24, 24, 'Cliente não encontrado');
}

export { IClient, create, findById, remove, update };