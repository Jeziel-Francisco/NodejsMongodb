import { Schema } from 'mongoose';

const SubGroupSchema = new Schema(
    {
        description: { type: String, required: true },
        priceSale: { type: String, required: true }
    }
);
export default SubGroupSchema;