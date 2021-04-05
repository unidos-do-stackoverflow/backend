import { Router } from 'express';
import childrenRoutes from '../../modules/children/routes/children.routes';
import templateRoutes from '../../modules/template/routes/template.routes';
import userRoutes from '../../modules/user/routes/user.routes'

const routes = Router();
routes.use('/template', templateRoutes);
routes.use('/user', userRoutes);
routes.use('/children', childrenRoutes);

export default routes;
