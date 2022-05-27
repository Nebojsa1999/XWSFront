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
  publicUsers: any;

  constructor(    private apiService: ApiService,  private router: Router

    ) { }

  ngOnInit(): void {
    
        const userString = localStorage.getItem('user');

        if(!userString) {
          return;
        }
      
        this.user = JSON.parse(userString);
      }


  }


