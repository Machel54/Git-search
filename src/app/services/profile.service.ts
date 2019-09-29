import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable()
export class ProfileService {
private username:string;
private clientid = 'aedafa28b621dd91b879';
private clientsecret = '0e1590845b9e5015cf4841f7b0b24a55b0ce4b50';

  constructor(private http:HttpClient) {
   console.log("service is working");
   this.username = 'Machel54';
   }
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret" + this.clientsecret)
   }
}
