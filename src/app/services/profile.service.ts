import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable()
export class ProfileService {
private clientid = 'aedafa28b621dd91b879';
private clientsecret = '0e1590845b9e5015cf4841f7b0b24a55b0ce4b50';
Apikey = environment.Apikey;
header = 'https://api.github.com/users/';


  constructor(private http:HttpClient) {
   console.log("service is working");
   }
   getProfileInfo(username):Observable <any>{
     return this.http.get("https://api.github.com/users/" + username + "?client_id=" + this.clientid + "&client_secret" + this.clientsecret)
   }
   getProfileRepos(username) :Observable <any>{
    return this.http.get(this.header + username + '/repos?' + this.Apikey);
  }
  
  updateProfile(username:string){
    username = username;
  }
}
