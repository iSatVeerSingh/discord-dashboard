import { Request, Response, Router } from "express";
import passport from "passport";

const AuthRouter = Router();

AuthRouter.get('/discord', passport.authenticate('discord'), (req: Request, res: Response) => {
  res.send('This is discord auth route')
})

AuthRouter.get('/discord/redirect', passport.authenticate('discord'), (req: Request, res: Response)=>{
  res.send({
    msg: 'success, discord/redirect route'
  })
})

AuthRouter.get('/status', (req: Request, res: Response)=> {
  return req.user ? res.send(req.user) : res.status(401).send('Not Authorized')
})

export default AuthRouter;
