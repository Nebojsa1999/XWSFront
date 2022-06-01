import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users-ifollow',
  templateUrl: './users-ifollow.component.html',
  styleUrls: ['./users-ifollow.component.scss']
})
export class UsersIFollowComponent implements OnInit {
  data: any;
  displayedColumns: string[] = ['Name', 'Surname'];
  user:any
  constructor(private apiService: ApiService , 
    private router: Router){}

  ngOnInit(): void {
    const userString = localStorage.getItem('user');
    if(userString == null) {
      this.router.navigate(['/login'], {queryParams: { login: 'false' } });
    }
  
    this.user = JSON.parse((userString) || '{}');

    this.apiService.getUsersThatIFollow().subscribe((response : any) => {
      this.data = response;
      
        
    });
  }

}
