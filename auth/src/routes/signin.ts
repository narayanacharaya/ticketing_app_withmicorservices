import express from 'express';
 import {body } from 'express-validator'
 import jwt from  'jsonwebtoken';
 
import { validateRequest } from '../middleware/validate-reqest';
import { User } from '../models/userModel';
import { BadRequestError } from '../errors/badRequesterror';
import { Password } from '../services/password';
const router = express.Router();
router.post('/api/users/signin',[
    body("email")
   .isEmail().withMessage("Email must be valid "),
   body("password").trim()
   .notEmpty().withMessage("Please enter your password")
],validateRequest, async(req, res) => { 
    const {email,password} = req.body;
    const exitingUser = await User.findOne({email: email});
    if(!exitingUser) throw new BadRequestError('Invalid email or password');
     const passwordMatch =Password.compare(password,exitingUser.password);
    if(!passwordMatch)throw new BadRequestError('Invalid email or password');
    const userJwt = jwt.sign({id:exitingUser.id,email:exitingUser.email},'NepaliGuyz');
    req.session = {
        jwt: userJwt
      };
    res.status(200).send(exitingUser)
})
export {router as signinRouter}