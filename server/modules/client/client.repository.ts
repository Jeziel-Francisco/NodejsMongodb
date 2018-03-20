import ClientSchema from './../../entities/documents/client.schema';

import * as mongoose from 'mongoose';

export default mongoose.model('Client', ClientSchema);