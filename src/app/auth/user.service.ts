import { Injectable } from '@angular/core';
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:User[]=[
    {uid:"46413rgg5erw4g",email:"d@d",password:"123456",username:"user1"},
    {uid:"",email:"s@s",password:"123456",username:"user2"}
  ];
  constructor() { }

  getUser(uid:string){
    return this.users.find((u) => u.uid === uid);
  }
}
