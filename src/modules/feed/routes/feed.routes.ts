import { Router } from 'express';
import { FeedControllers } from '../controllers/FeedControllers';

const feedRoutes = Router();
const feed = new FeedControllers();

feedRoutes.post('/create', feed.create);
feedRoutes.get('/', feed.get);

export default feedRoutes;
