  
  export abstract class CustomError extends Error {
   abstract statuscode:number;
    constructor(messgae:string,) {
       
        super(messgae);

    }
    abstract serializeErrors(): { message: string; field?: string }[];
 }