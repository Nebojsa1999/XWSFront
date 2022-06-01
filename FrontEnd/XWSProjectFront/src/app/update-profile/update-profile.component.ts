import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../api.service";
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  form: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  public errorMessage : any;
   
  users: any;
  user:any;
  exampleArr: Array<{ id: number, gend: string}> = [
    { id: 0, gend: 'Male'},
    { id: 1, gend: 'Female'}
  ];
  privacies: Array<{id:number, value: boolean, name: string}> = [
    {id:0, value: false, name: 'Public'},
    {id:1, value: true, name: 'Private'}
  ];
  
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,

  ) {
    
    this.form = this.fb.group({
      email: [''],
      name: [''],
      surname: [''],
      phoneNumber: [''],
      gender: [''],
      dateOfBirth: [''],
      biography: [''],
      workExperience: [''],
      skill: [''],
      education: [''],
      interest: [''],
      privacy: ['']
    });

    const userString = localStorage.getItem('user');
    if(userString == null) {
      this.router.navigate(['/login'], {queryParams: { login: 'false' } });
    }
  
    this.user = JSON.parse((userString) || '{}');
 
  }

  

  async ngOnInit():  Promise<void>  {
    
    this.users = []    
    this.api.getCurrentUser().subscribe((response : any) => {
      this.users = response;
      
      this.form.patchValue({
        email: this.users.email,
        name: this.users.name,
        surname: this.users.surname,
        phoneNumber: this.users.phoneNumber,
        gender: this.users.gender,
        dateOfBirth: this.users.dateOfBirth,
        biography: this.users.biography,
        education: this.users.education,
        skill: this.users.skill,
        workExperience: this.users.workExperience,
        interest: this.users.interest,
        privacy: this.users.privacy,
        
     });  
    })
  }

  async onSubmit(): Promise<void> {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
    
        const email = this.form.get('email')?.value;
        const name = this.form.get('name')?.value;
        const surname = this.form.get('surname')?.value;
        const phoneNumber = this.form.get('phoneNumber')?.value;
        const gender = this.form.get('gender')?.value;
        const dateOfBirth = this.form.get('dateOfBirth')?.value;
        const biography = this.form.get('biography')?.value;
        const education = this.form.get('education')?.value;
        const skill = this.form.get('skill')?.value;
        const workExperience = this.form.get('workExperience')?.value;
        const interest = this.form.get('interest')?.value;
        const privacy = this.form.get('privacy')?.value;
        this.api.updateProfile({
          email: email,
          name: name,
          surname: surname,
          phoneNumber: phoneNumber,
          gender: gender,
          biography: biography,
          education: education,
          skill: skill,
          workExperience: workExperience,
          interest: interest,
          dateOfBirth: dateOfBirth,    
          privacy: privacy
          
        }).subscribe((response : any) => {
          this.ngOnInit()

        });


      } catch (err) {
        this.loginInvalid = true;
        
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }



}
