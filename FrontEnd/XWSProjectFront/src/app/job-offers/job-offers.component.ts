import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.scss']
})
export class JobOffersComponent implements OnInit {
user:any;
jobs:any;
users: any[] = [];
displayedColumns: string[] = ['Owner','Description', 'Position','DescriptionActivity','Precondition'];

  constructor(private apiService: ApiService,
    private router: Router) {
    const userString = localStorage.getItem('user');
        if(userString == null) {
          this.router.navigate(['/login'], {queryParams: { login: 'false' } });
        }
      
        this.user = JSON.parse((userString) || '{}');
    

   }
  ngOnInit(): void {
    this.apiService.getAllJobs().subscribe((response:any)=>{
      this.jobs = response;
    });

    this.apiService.getAllUsers(
          
      ).subscribe((respone:any)=>
      {
        this.users = respone;
      });

    
  }

userFunc(userId:any) : any 
{
  
  for(let user of this.users)
  {
    if(user.id == userId)
    {
      console.log(this.user)
      return user;
    }
  }

  return null;
}

}
