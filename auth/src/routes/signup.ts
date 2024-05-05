import express, {Request, Response} from 'express';
import {body, validationResult} from 'express-validator'
 import { RequestValidationError } from '../errors/validation-error';
const router = express.Router();
router.post('/api/users/signup', [body("email")
.isEmail().
withMessage('Not a valid email'), 
body('password').trim()
.isLength({min:4 ,max:20})
.withMessage("password should be max than 4 and less than 20")]
,(req:Request, res:Response) => { 
    const error = validationResult(req);
    if(!error.isEmpty() ) throw  new RequestValidationError(error.array(),400);

   console.log(!error)
}
)
export {router as signupRouter}