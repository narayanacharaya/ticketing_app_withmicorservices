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
 },{
  toJSON:{
    transform(doc,ret){
      ret.id=ret._id;

      delete  ret._id;
      delete ret.password;
      delete ret._v;

    }
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