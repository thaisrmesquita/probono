import { Router } from 'express';
import LawyerController from './controllers/LawyerController';
import ClientController from './controllers/ClientController';
import SessionController from './controllers/SessionController';
const routes = new Router();

routes.post('/lawyer', LawyerController.store);
routes.post('/login', SessionController.login);
routes.post('/client', ClientController.store);

export default routes;