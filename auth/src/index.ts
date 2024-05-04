import express from 'express';
import {json } from  'body-parser';
 const app= express();
 app.use(json());


 app.get('/api/users/currentusers', (req, res)=>{
  res.send('current user');
})
  app.get('/', (req, res)=>{
    console.log("i got request")
    res.send('Im running fine');
  })

  app.listen(3000,()=>{
      console.log('server is running on port 3000 successfully');
  });