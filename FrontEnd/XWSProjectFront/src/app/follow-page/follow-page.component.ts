import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-follow-page',
  templateUrl: './follow-page.component.html',
  styleUrls: ['./follow-page.component.scss']
})
export class FollowPageComponent implements OnInit {
  data: any;
  displayedColumns: string[] = ['Name', 'Surname', 'Button'];
  
  constructor(  private apiService: ApiService , 
    private router: Router) {
      
     } 
 
  ngOnInit(): void {

    const userString = localStorage.getItem('user');

    if(!userString) {
      return;
    }
  
    const user = JSON.parse(userString);
    this.apiService.getUsersThatIDontFollow().subscribe((response : any) => {
      this.data = response;

        
    });
   
  }

  followUser  (id:any) 
  {
      this.apiService.follow({
        IdUserWhomFollow: id,
      }).subscribe((response : any) => {
          this.router.navigate(['/userprofile']);
       
      });
  }
}