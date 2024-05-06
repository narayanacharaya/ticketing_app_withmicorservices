  
  export abstract class CustomError extends Error {
   abstract statusCode:number;
    constructor(public message:string) {
       
        super(message);

    }
    abstract serializeErrors(): { message: string; field?: string }[];
 }