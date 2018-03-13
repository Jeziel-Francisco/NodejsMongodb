import { EventEmitter } from 'events';


import * as assert from 'assert';

function forcePassword(password: string, message: string) { }

function isDeepEqual(actual: any, expected: any, message: string) {
    return assert.deepEqual(actual, expected, message);
}

function isEmail(email: string, message: string) { }

function isEqual(actual: any, expected: any, message: string) {
    return assert.equal(actual, expected, message);
}

function isLength(property: any, lengthMin: number, lengthMax: number, message: string) {
    return ((property.length >= lengthMin) && (property.length <= lengthMax)) ? true : new EventEmitter().emit('error', new Error(message));
}

function notDeepEqual(actual: any, expected: any, message: string) {
    return assert.notDeepEqual(actual, expected, message);
}

function notEqual(actual: any, expected: any, message: string) {
    return assert.notEqual(actual, expected, message);
}

function propertyExists(properts: string[], objeto: any) {
    properts.forEach((propert: string, index: number) => {
        (objeto.hasOwnProperty(propert)) ? true : new EventEmitter().emit('error', new Error(`A Propriedade ${propert} precisa ser preenchida! `));
    });
}

export { forcePassword, isDeepEqual, isEmail, isEqual, isLength, notDeepEqual, notEqual, propertyExists };