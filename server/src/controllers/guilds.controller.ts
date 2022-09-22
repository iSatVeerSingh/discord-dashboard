import { Request, Response } from 'express';
import { UserSchemaType } from '../database/schemas/User';
import { getBotGuilds, getMutualGuilds, getUserGuilds } from '../services/guilds.service';

export const getGuilds = async (req: Request, res: Response) => {
  const user = req.user as UserSchemaType;
  try {
    const guilds = await getMutualGuilds(user.id)
    console.log(guilds)
    res.send(guilds);
  } catch (err) {
    console.log(err);
    res.status(400).send('Error');
  }
};
