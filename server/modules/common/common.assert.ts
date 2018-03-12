import { EventEmitter } from 'events';


import * as assert from 'assert';

function ForcePassword(password: string, message: string) { }

function IsDeepEqual(actual: any, expected: any, message: string) {
    return assert.deepEqual(actual, expected, message);
}

function IsEmail(email: string, message: string) { }

function IsEqual(actual: any, expected: any, message: string) {
    return assert.equal(actual, expected, message);
}

function IsLength(property: any, lengthMin: number, lengthMax: number, message: string) {
    return ((property.length >= lengthMin) && (property.length <= lengthMax)) ? true : new EventEmitter().emit('error', new Error(message));
}

function NotDeepEqual(actual: any, expected: any, message: string) {
    return assert.notDeepEqual(actual, expected, message);
}

function NotEqual(actual: any, expected: any, message: string) {
    return assert.notEqual(actual, expected, message);
}

function PropertyExists(properts: string[], objeto: any) {
    properts.forEach((propert: string, index: number) => {
        (objeto.hasOwnProperty(propert)) ? true : new EventEmitter().emit('error', new Error(`A Propriedade ${propert} precisa ser preenchida! `));
    });
}

export { ForcePassword, IsDeepEqual, IsEmail, IsEqual, IsLength, NotDeepEqual, NotEqual, PropertyExists };