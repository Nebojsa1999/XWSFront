import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.scss']
})
export class SearchJobComponent implements OnInit {
  form: FormGroup;
  user:any;
  users: any[] = [];
  jobs:any;
  displayedColumns: string[] = ['Owner','Description', 'Position','DescriptionActivity','Precondition'];
  public hideElement: boolean = false;

  toggleElement(){
     this.hideElement = true;
  }
 
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {

    this.form = this.fb.group({
      Position: ['', Validators.required],
    });

    const userString = localStorage.getItem('user');
        if(userString == null) {
          this.router.navigate(['/login'], {queryParams: { login: 'false' } });
        }
      
        this.user = JSON.parse((userString) || '{}');
  }
  ngOnInit(): void {


  }

  
  async onSubmit(): Promise<void> {
    this.jobs = []    
    const Position = this.form.get('Position')?.value;
        this.apiService.searchJob({
          Position: Position,
        }).subscribe((response : any) => {
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
      return user;
    }
  }

  return null;
}



}
