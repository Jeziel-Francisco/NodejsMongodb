import { Schema } from 'mongoose';

import addressSchema from './../subdocuments/address.subdocuments';
import phoneSchema from './../subdocuments/phone.subdocuments';

const FornecedorSchema = new Schema({
    address: [addressSchema],
    createdAt: { type: Date, default: Date.now },
    firstName: { type: String, required: true },
    identification: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: [phoneSchema]
});

export default FornecedorSchema;