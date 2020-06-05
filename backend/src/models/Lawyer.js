import {Schema, model} from 'mongoose';

const LawyerSchema = new Schema({
    name: String,
    email: String,
    password: String,
    created: Date,
    updated: Date
});

export default model('Lawyer', LawyerSchema);