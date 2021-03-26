import { Router } from 'express';
import templateRoutes from '../../modules/template/routes/template.routes';
import userRoutes from '../../modules/user/routes/user.routes'

const routes = Router();
routes.use('/template', templateRoutes);
routes.use('/user', userRoutes)

export default routes;
