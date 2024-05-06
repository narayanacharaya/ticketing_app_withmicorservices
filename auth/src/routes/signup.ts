import express, {Request, Response} from 'express';
import {body, validationResult} from 'express-validator'
 import { RequestValidationError } from '../errors/validation-error';
  import { User } from '../models/userModel';
const router = express.Router();
router.post('/api/users/signup', [body("email")
.isEmail().
withMessage('Not a valid email'), 
body('password').trim()
.isLength({min:4 ,max:20})
.withMessage("password should be max than 4 and less than 20")]
,async (req:Request, res:Response) => { 
    const error = validationResult(req);
    if(!error.isEmpty() ) {
        throw  new RequestValidationError(error.array(),400);
    }
    const {email, password} = req.body;
    const exitingUser = await User.findOne({ email:email})
    if(exitingUser) throw  new Error('Email is already taken  ');
     const user =User.build({ email:email, password:password})
      await user.save();
       res.send(user)
}
)
export {router as signupRouter}