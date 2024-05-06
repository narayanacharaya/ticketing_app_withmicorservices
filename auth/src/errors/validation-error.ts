import { ValidationError }  from 'express-validator'
import{CustomError} from './customeerror'
 export class RequestValidationError extends CustomError{

    constructor(public errors: ValidationError[], public statusCode: number) {
   
        super('RequestValidationError');
      }
      serializeErrors(){
        return this.errors.map(err =>  {return { message: err.msg, field:err.type };});
      }
}