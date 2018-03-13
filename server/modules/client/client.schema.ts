import * as mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
    address: {
        city: { type: String, default: 'City Empty' },
        code: { type: Number, default: 0 },
        number: { type: Number, default: 0 },
        complement: { type: String, default: 'Complement Empty' },
        neighborhood: { type: String, default: 'Neighborhood Empty' },
        place: { type: String, default: 'Place Empty' },
        state: { type: String, default: 'State Empty' }
    },
    createdAt: { type: Date, default: Date.now },
    firstName: { type: String, required: true },
    identification: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: [{
        contact: { type: String, default: 'Contact Empty' },
        ddd: { type: Number, required: true },
        number: { type: Number, required: true }
    }]
});

export default ClientSchema;