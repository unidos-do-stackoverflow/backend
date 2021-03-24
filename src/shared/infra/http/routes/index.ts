import { Router } from 'express';
import templateRoutes from '../../../../modules/template/infra/http/routes/template.routes';

const routes = Router();
routes.use('/template', templateRoutes);

export default routes;
