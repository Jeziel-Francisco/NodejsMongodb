import { model } from 'mongoose';

import ProductSchema from './../../entities/documents/product.schema';

export default model('Product', ProductSchema);