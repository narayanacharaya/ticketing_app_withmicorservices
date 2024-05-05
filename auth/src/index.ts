import express from 'express';
import {json } from  'body-parser';
 import { currentusersRouter } from './routes/current-user';
  import { signinRouter } from './routes/signin';
  import { signoutRouter } from './routes/signout';
  import { signupRouter } from './routes/signup';
   import { errorhandler } from './middleware/error-handeler';
 const app= express();
 app.use(json());

app.use(currentusersRouter)
app.use(signinRouter)
app.use(signupRouter)
app.use(signoutRouter);
app.use(errorhandler)

  app.listen(3000,()=>{
      console.log('server is running on port 3000 successfully');
  });