import { CustomError } from "../errors/customeerror";
import { Request, Response, NextFunction } from 'express';
  export const  errorhandler=(err:Error,req:Request,res:Response,next:NextFunction) => {
    if(err instanceof CustomError){
      console.log("does im here")
        return res.status(err.statuscode).send({ errors: err.serializeErrors() });
    }
    res.status(400).send({
        errors: [{ message: 'Something went wrong' }]
      });
  }
 ;
 