import { Router } from 'express';
import { ChildrenController } from '../controllers/ChildrenController';

const childrenRoutes = Router();
const children = new ChildrenController();

childrenRoutes.post('/create', children.create);

export default childrenRoutes;
