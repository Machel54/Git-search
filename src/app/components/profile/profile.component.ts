import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../../services/profile.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  repos:[]
  username: string;
  profile = []
  constructor(private profileService: ProfileService) {

  }


  findProfile(username: any){
    this.profileService.getProfileInfo(username).subscribe(profile => {
      this.profile = profile
      console.log(username)
      // console.log(this.profiles);
    });
    
    this.profileService.getProfileRepos(username).subscribe(repos =>{
      console.log(repos);
      this.repos = repos;
      console.log(this.repos)
    })
  }

  ngOnInit() {
    this.findProfile('Machel54')
  }

}