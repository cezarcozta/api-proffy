import express from 'express';

import ClassesControler from './controllers/ClassesController';
import ConnectionsControler from './controllers/ConnectionsController';

const routes = express.Router();

const classController = new ClassesControler();
const connectionsController = new ConnectionsControler();

routes.post('/classes', classController.create);
routes.get('/classes', classController.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;