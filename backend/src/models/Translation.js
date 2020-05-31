import {Schema, model} from 'mongoose';

const TranslationSchema = new Schema({
    rule: String,
    description: String
});

export default model('Translation', TranslationSchema);