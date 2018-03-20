import UserSchema from './../../entities/documents/user.schema';

import * as mongoose from 'mongoose';

export default mongoose.model('User', UserSchema);