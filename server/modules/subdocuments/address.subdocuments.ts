import { Schema } from 'mongoose';

const addressSchema = new Schema(
    {
        city: { type: String, default: 'City Empty' },
        code: { type: String, default: 'Code Empty' },
        number: { type: String, default: 'Number Empty' },
        complement: { type: String, default: 'Complement Empty' },
        neighborhood: { type: String, default: 'Neighborhood Empty' },
        place: { type: String, default: 'Place Empty' },
        state: { type: String, default: 'State Empty' }
    }
);

export default addressSchema;