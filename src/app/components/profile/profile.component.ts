import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../../services/profile.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any;
  repos:any;
  username:string;
  profiles = []
  constructor(private profileService: ProfileService) {

  }


  findProfile(){
    this.profileService.getProfileInfo().subscribe(profile => {
      this.profiles = profile;
      console.log(this.profiles);
    });
    
    this.profileService.getProfileRepos().subscribe(repos =>{
      console.log(repos);
      this.repos = repos;
    })
  }

  ngOnInit() {
  }

}