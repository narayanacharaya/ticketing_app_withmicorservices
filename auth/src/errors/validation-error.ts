import { ValidationError }  from 'express-validator'
import{CustomError} from './customeerror'
 export class RequestValidationError extends CustomError{

    constructor(public errors: ValidationError[], public statuscode: number) {
      console.log(" does request validator created successfully")
        super('Invalid request parameters');
      }
      serializeErrors(){
        return this.errors.map(err =>  {return { message: err.msg, field:err.type };});
      }
}