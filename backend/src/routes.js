import { Router } from 'express';
import LawyerController from './controllers/LawyerController';
import ClientController from './controllers/ClientController';
const routes = new Router();

routes.post('/lawyer', LawyerController.store);
routes.post('/login', LawyerController.login);
routes.post('/client', ClientController.store);
routes.post('/loginclient', ClientController.login);

export default routes;