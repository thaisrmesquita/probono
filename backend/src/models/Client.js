import {Schema, model} from 'mongoose';

const ClientSchema = new Schema({
    name: String,
    cpf: String,
    password: String,
    email: String,
    created: Date,
    updated: Date
});

export default model('Client', ClientSchema);