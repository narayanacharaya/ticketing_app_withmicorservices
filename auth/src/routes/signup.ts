import express, {Request, Response} from 'express';
import {body} from 'express-validator'
 
  import { User } from '../models/userModel';
  import jwt from  'jsonwebtoken';
  import cookieSession from 'cookie-session';
  const router = express.Router();
   import {validateRequest } from '../middleware/validate-reqest'
router.post('/api/users/signup', [body("email")
.isEmail().
withMessage('Not a valid email'), 
body('password').trim()
.isLength({min:4 ,max:20})
.withMessage("password should be max than 4 and less than 20")]
, validateRequest,async (req:Request, res:Response) => { 

    
    const {email, password} = req.body;
    const exitingUser = await User.findOne({ email:email})
    if(exitingUser) throw  new Error('Email is already taken  ');
     const user =User.build({ email:email, password:password})
      await user.save();


    // generating jsonwebtoken 
    const userJwt = jwt.sign({id:user.id,email:user.email},'NepaliGuyz');
    req.session = {
        jwt: userJwt
      };
    res.status(201).send(user)
}
) 
export {router as signupRouter}