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
  user:any;
  constructor(private apiService: ApiService , 
    private router: Router) { }

  ngOnInit(): void {
    const userString = localStorage.getItem('user');
    if(userString == null) {
      this.router.navigate(['/login'], {queryParams: { login: 'false' } });
    }
  
    this.user = JSON.parse((userString) || '{}');
    this.apiService.getUsersThatSendRequest().subscribe((response : any) => {
      this.data = response;
        
    });
  }

  accept  (id:any) 
  {
      this.apiService.accept({
        userWhoFollowsMe: id,
      }).subscribe((response : any) => {
       this.ngOnInit()
      });
  }

  decline  (id:any) 
  {
      this.apiService.decline({
        userWhoFollowsMe: id,
      }).subscribe((response : any) => {
        this.ngOnInit()

      });
  }

}
