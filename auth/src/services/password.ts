import {scrypt ,randomBytes} from 'crypto'
import {promisify} from 'util'
 const asyncScrypt= promisify(scrypt);
export class Password{
    static async toHash(password:string ) {
        const salt =randomBytes(8).toString('hex');
        const buff = await asyncScrypt(password,salt,64);
    }
    static compare(enteredPassword:string, storedPassword:string) {}

}