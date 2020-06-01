import {Schema, model} from 'mongoose';

const ProgressSchema = new Schema({
    description: String,
    translation: String,
    published: Date
});

export default model('Progress', ProgressSchema);