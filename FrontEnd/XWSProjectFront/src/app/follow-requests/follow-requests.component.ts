import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-follow-requests',
  templateUrl: './follow-requests.component.html',
  styleUrls: ['./follow-requests.component.scss']
})
export class FollowRequestsComponent implements OnInit {
  data: any;
  displayedColumns: string[] = ['Name', 'Surname', 'Button'];
  constructor(private apiService: ApiService , 
    private router: Router) { }

  ngOnInit(): void {
    const userString = localStorage.getItem('user');

    if(!userString) {
      return;
    }
  
    const user = JSON.parse(userString);
    this.apiService.getUsersThatSendRequest().subscribe((response : any) => {
      this.data = response;
      
        
    });
  }

  accept  (id:any) 
  {
      this.apiService.accept({
        userFollowId: id,
      }).subscribe((response : any) => {
          this.router.navigate(['/userprofile']);
       
      });
  }

  decline  (id:any) 
  {
      this.apiService.decline({
        userFollowId: id,
      }).subscribe((response : any) => {
          this.router.navigate(['/userprofile']);
       
      });
  }

}
