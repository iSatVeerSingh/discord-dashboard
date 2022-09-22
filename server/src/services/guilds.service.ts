import axios from 'axios';
import { GITHUB_API_URL } from '../config/constants';
import envConfig from '../config/envConfig';
import User from '../database/schemas/User';
import { PartialGuild } from '../utils/types';

export const getBotGuilds = async () => {
  const BOT_TOKEN = envConfig.discordBotToken;
  return axios.get<PartialGuild[]>(`${GITHUB_API_URL}/users/@me/guilds`, {
    headers: {
      Authorization: `Bot ${BOT_TOKEN}`,
    },
  });
};

export const getUserGuilds = async (id: string) => {
  const user = await User.findById(id);
  if (!user) throw new Error('No user found');
  return axios.get<PartialGuild[]>(`${GITHUB_API_URL}/users/@me/guilds`, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
};

export const getMutualGuilds = async (id: string) => {
  const { data: botGuilds } = await getBotGuilds();
  const { data: userGuilds } = await getUserGuilds(id);

  const adminUserGuilds = userGuilds.filter(({ permissions }) => {
    return (parseInt(permissions) & 0x8) === 0x8;
  });

  const mutualGuilds = adminUserGuilds.filter((guild)=> botGuilds.some((botGuild)=> botGuild.id === guild.id))

  return mutualGuilds
};
