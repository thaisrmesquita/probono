import {Schema, model} from 'mongoose';

const ClientSchema = new Schema({
    cpf: String,
    password: String,
    email: String,
    created: Date,
    updated: Date
});

export default model('Client', ClientSchema);