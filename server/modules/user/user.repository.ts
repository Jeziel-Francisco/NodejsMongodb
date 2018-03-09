import UserSchema from './user.schema';

import * as Mongoose from 'mongoose';

export default Mongoose.model('User', UserSchema);