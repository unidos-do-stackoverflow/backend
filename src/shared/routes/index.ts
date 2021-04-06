import { Router } from 'express';
import childrenRoutes from '../../modules/children/routes/children.routes';
import feedRoutes from '../../modules/feed/routes/feed.routes';
import templateRoutes from '../../modules/template/routes/template.routes';
import userRoutes from '../../modules/user/routes/user.routes'

const routes = Router();
routes.use('/template', templateRoutes);
routes.use('/user', userRoutes);
routes.use('/children', childrenRoutes);
routes.use('/feed', feedRoutes);

export default routes;
