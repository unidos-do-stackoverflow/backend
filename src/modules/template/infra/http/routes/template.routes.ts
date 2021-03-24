import { Router } from 'express';
import TemplateController from '../controllers/TemplateController';

const templateRoutes = Router();
const template = new TemplateController();

// Rota POST
templateRoutes.post('/', template.post);

export default templateRoutes;
