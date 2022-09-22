import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT || 9000,
  discordClientId: process.env.DISCORD_CLIENT_ID || '',
  discordClientSecret: process.env.DISCORD_CLIENT_SECRET || '',
  discordRedirectUrl: process.env.DISCORD_REDIRECT_URL || '',
  discordBotToken: process.env.DISCORD_BOT_TOKEN || '',

  mode: process.env.NODE_ENV,
};
