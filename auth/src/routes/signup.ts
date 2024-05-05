import express, {Request, Response} from 'express';
import {body, validationResult} from 'express-validator'
const router = express.Router();
router.post('/api/users/signup', [body("email")
.isEmail().
withMessage('Not a valid email'), 
body('body').trim()
.isLength({min:4 ,max:20})
.withMessage("password should be max than 4 and less than 20")]
,(req:Request, res:Response) => { 
    const error = validationResult(req);
    if(!error.isEmpty) return res.send 
    res.send(error.array());})
export {router as signupRouter}