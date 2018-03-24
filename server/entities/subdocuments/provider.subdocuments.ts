import { Schema } from 'mongoose';

const ProviderSchema = new Schema(
    {
        nameReason: { type: String, required: true },
        identification: { type: String, default: 'Identification Empty' },
        nameFantasy: { type: String, required: true }
    }
);

export default ProviderSchema;