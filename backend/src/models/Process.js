import {Schema, model} from 'mongoose';

const ProcessSchema = new Schema({
    number: Number,
    created: Date,
    updated: Date,
    client: String,
    progress: Array,
    responsible: String

});

export default model('Process', ProcessSchema);