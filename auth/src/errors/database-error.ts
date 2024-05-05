class DatabaseError extends CustomeError {
     resaon="Error Connecting to database"
    constructor( public error:String)
    
    {
        super('Database Error');
    }
     serializeErrors(){
         return [{message:this.message}];
     }
         
     
}