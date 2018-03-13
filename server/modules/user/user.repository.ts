import UserSchema from './user.schema';

import * as mongoose from 'mongoose';

export default mongoose.model('User', UserSchema);