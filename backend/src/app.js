import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';

class App {

    constructor() {
        this.server = express();
        mongoose.connect('mongodb+srv://probono:probono@probono-cxuda.mongodb.net/probono?retryWrites=true&w=majority', {
        useNewUrlParser:true,
        useUnifiedTopology:true            
        });
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(cors());
        this.server.use(express.json());
    }
    routes() {
        this.server.use(routes);
    }
}

export default new App().server;