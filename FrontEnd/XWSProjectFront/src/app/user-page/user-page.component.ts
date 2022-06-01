import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from "../api.service";
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
  
})


export class UserPageComponent implements OnInit {
  user: any;
  data:any;
  keys:any;
  displayedColumns: string[] = ['Content', 'Image', 'Link'];
  constructor(
    private router: Router,
    private api: ApiService


   ) 
   { }

  ngOnInit(): void {
    
        const userString = localStorage.getItem('user');
        if(userString == null) {
          this.router.navigate(['/login'], {queryParams: { login: 'false' } });
        }
      
        this.user = JSON.parse((userString) || '{}');
        
        this.api.getPostByUser({
          userId : this.user.id
        }).subscribe((response : any) => {
          this.data = response;
        })

        this.api.getApiKeysFromUserId({
          userId: this.user.id
        }).subscribe((response:any)=>{
          this.keys = response;
          console.log(this.keys.apiKeyString)
        })

      }

    generateApiKey()
    {
      this.api.createApi({
        userId: this.user.id,
        ApiKeyString: ''
      }).subscribe((respone : any)=>{
        this.ngOnInit()
      })
    }


  }


