import { CustomError } from "./customeerror";

class BadRequestError extends CustomError{
    statusCode: number;400;
     constructor(public message: string){
        super(message);
     }
     serializeErrors(){
         return [ {"message": this .message}]
     }
}