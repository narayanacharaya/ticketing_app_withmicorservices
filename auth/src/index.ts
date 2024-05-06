import express from 'express';
import {json } from  'body-parser';
import  'express-async-errors';
 import { currentusersRouter } from './routes/current-user';
  import { signinRouter } from './routes/signin';
  import { signoutRouter } from './routes/signout';
  import { signupRouter } from './routes/signup';
import { errorHandler } from './middleware/error-handler';


 const app= express();
  
 app.use(json());
 app.set('trust proxy', true);
app.use(
cookieSession({singed:false,
   }),

)
app.use(currentusersRouter)
app.use(signinRouter)
app.use(signupRouter)
app.use(signoutRouter);
app.use( errorHandler);

  app.listen(3000,()=>{
      console.log('server is running on port 3000 successfully');
  });

function cookieSession(arg0: { singed: boolean; }): any {
  throw new Error('Function not implemented.');
}
