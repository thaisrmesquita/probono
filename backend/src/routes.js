import { Router } from 'express';
import LawyerController from './controllers/LawyerController';
import ClientController from './controllers/ClientController';
import SessionController from './controllers/SessionController';
import ProcessController from './controllers/ProcessController';
import ProgressController from './controllers/ProgressController';
import TranslationController from './controllers/TranslationController';
const routes = new Router();

routes.post('/lawyer', LawyerController.store);
routes.post('/client', ClientController.store);

routes.post('/login', SessionController.login);

routes.post('/process', ProcessController.store);
routes.get('/process/:number', ProcessController.index);
routes.get('/process', ProcessController.indexAll);
routes.get('/process-lawyer', ProcessController.findByResponsible);
routes.get('/process-client', ProcessController.findByClient);
routes.delete('/process/:idProcess', ProcessController.delete);

routes.post('/progress', ProgressController.store);

routes.post('/translation', TranslationController.store);

export default routes;