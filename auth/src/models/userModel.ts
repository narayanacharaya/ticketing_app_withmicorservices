import  mongoose from 'mongoose';
import { Password } from '../services/password';


 const  UserSchmea=  new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
 });
 // interface describe user
 interface UserAtt{
    email: String,
    password: String,
   
 }

 // inteface describe userModel
  interface UserModel extends mongoose.Model<any> {
    build(user: UserAtt): UserDoc;
  }

  // interface describe userproperties 
   interface UserDoc extends mongoose.Document{
    email: String,
    password: String,
   }
  UserSchmea.pre('save', async function (done){
    if(this.isModified('password')){
      const hashed = await Password.toHash(this.get('password'));
      this.set('password', hashed);
    }
    done();
  });
  UserSchmea.statics.build=(user: UserAtt) =>{
         return new User(user)
  }
  const User = mongoose.model<UserDoc,UserModel>('User',UserSchmea);
export {User};