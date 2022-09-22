import { Router } from 'express';
import { getGuilds } from '../../controllers/guilds.controller';
import { IsAuthenticated } from '../../middlewares/authMiddleware';

const GuildsRouter = Router();

GuildsRouter.get('/', IsAuthenticated, getGuilds);

export default GuildsRouter;
