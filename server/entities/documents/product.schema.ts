import { Schema } from 'mongoose';

import providerSchema from './../subdocuments/provider.subdocuments';

const ProductSchema = new Schema(
    {
        description: { type: String, required: true },
        codeMercusul: { type: String, required: true },
        classificationTax: { type: String, required: true },
        priceCost: { type: Number, required: true },
        priceMinSale: { type: Number, required: true },
        priceMaxSale: { type: Number, required: true },
        markupMin: { type: Number, required: true },
        markupMax: { type: Number, required: true },
        type: { type: Number, required: true },
        provider: [providerSchema]
    }
);

export default ProductSchema;