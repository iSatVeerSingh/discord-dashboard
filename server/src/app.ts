import express, { Express } from 'express';
import cors from 'cors';
import MainRouter from './routes';
import session from 'express-session';
import passport from 'passport';
import './strategies/discord' // if not working please use require()
import MongoStore from 'connect-mongo';


const createApp = (): Express => {
  const App = express();

  // Default Middlewares Setup
  // Enable parsing middlewares
  App.use(express.json());
  App.use(express.urlencoded({ extended: true }));

  // Enable CORS
  App.use(
    cors({
      origin: ['http://localhost:3000'],
      credentials: true,
    })
  );

  // Session Setup
  App.use(
    session({
      secret: 'ABCDEFGHIJKL',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
      },
      store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/discord_dashboard'
      })
    })
  );

  // Passport Authentication Setup
  App.use(passport.initialize())
  App.use(passport.session())

  // Base routes setup
  App.use('/api', MainRouter);

  return App;
};

export default createApp;
