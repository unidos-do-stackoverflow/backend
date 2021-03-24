import express from 'express';
import cors from 'cors';
import routes from './shared/infra/http/routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', routes);

export default app;
