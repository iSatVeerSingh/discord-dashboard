import createApp from './app';
import envConfig from './config/envConfig';
import ConnectDatabase from './database';

const PORT = envConfig.port;

const main = async () => {
  console.log(`Running in ${envConfig.mode} mode`);
  try {
    const App = createApp();
    App.listen(PORT, () => console.log('Server is running on port: ', PORT));
    ConnectDatabase();
  } catch (err) {
    console.log(err);
  }
};
main();
