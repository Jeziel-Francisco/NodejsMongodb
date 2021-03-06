import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    email: { type: String, lowercase: true, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true }
});

export default UserSchema;