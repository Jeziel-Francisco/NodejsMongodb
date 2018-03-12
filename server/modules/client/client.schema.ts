import * as Mongoose from 'mongoose';

const ClientSchema = new Mongoose.Schema({
    createdAt: { type: Date, default: Date.now }
});