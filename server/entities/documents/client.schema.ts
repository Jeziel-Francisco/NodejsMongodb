import addressSchema from './../subdocuments/address.subdocuments';
import phoneSchema from './../subdocuments/phone.subdocuments';


import * as mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
    address: addressSchema,
    createdAt: { type: Date, default: Date.now },
    firstName: { type: String, required: true },
    identification: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: [phoneSchema]
});

export default ClientSchema;