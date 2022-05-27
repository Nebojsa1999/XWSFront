import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {
  form: FormGroup;
  data: any;
  displayedColumns: string[] = ['Name', 'Surname', 'Email', 'Dateofbirth','Biography','Interest','Skill','WorkExperience','Privacy'];
  
  DropdownVar = 0;

  onSelect(x: number){
   this.DropdownVar = x;
   console.log(x);
  }
  constructor(    
    private api: ApiService,
    private router: Router,
    private fb: FormBuilder,


    ) { 
      
      this.form = this.fb.group({
        Name: ['']
      });
    }

  ngOnInit(): void {
   
  }

  async onSubmit(): Promise<void> {
    this.data = []    
    const Name = this.form.get('Name')?.value;
        this.api.search({
          Name: Name,
        }).subscribe((response : any) => {
          this.data = response;


          
        });


   
  }
}
