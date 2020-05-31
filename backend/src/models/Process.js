import {Schema, model} from 'mongoose';

const ProcessSchema = new Schema({
    number: Number,
    client:{
        type: Schema.Types.ObjectId,
        ref: 'Client'
    },
    progress: [{
        type: Schema.Types.ObjectId,
        ref: 'Progress'
    }],
    responsible:{
        type: Schema.Types.ObjectId,
        ref: 'Lawyer'
    },

});

export default model('Process', ProcessSchema);