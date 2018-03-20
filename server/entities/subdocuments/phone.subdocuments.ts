import { Schema } from 'mongoose';

const phoneSchema = new Schema(
    {
        contact: { type: String, default: 'Contact Empty' },
        ddd: { type: Number, required: true },
        number: { type: Number, required: true }
    }
);


export default phoneSchema;