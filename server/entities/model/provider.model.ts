interface IProvider {
    address: [{ city: string, code: string, number: string, complement: string, neighborhood: string, place: string, state: string }];
    createdAt: string;
    firstName: string;
    identification: string;
    lastName: string;
    phone: [{ contact: string, ddd: number, number: number }];
}

export { IProvider };