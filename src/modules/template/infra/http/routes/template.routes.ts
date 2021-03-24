import { Router } from 'express';
import TemplateController from '../controllers/TemplateController';

const templateRoutes = Router();
const template = new TemplateController();

templateRoutes.get('/', template.get);
templateRoutes.post('/', template.post);

export default templateRoutes;
