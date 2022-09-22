import { Router } from 'express';
import AuthRouter from './auth';
import GuildsRouter from './guilds';

const MainRouter = Router();

MainRouter.use('/auth', AuthRouter);
MainRouter.use('/guilds', GuildsRouter);

export default MainRouter;
