import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  public errorMessage : any; 
  infoMessage:string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async ngOnInit(): Promise<void> {
    this.infoMessage = '';
    this.route.queryParams
    .subscribe(params => {
      if(params['login'] !== undefined && params['login'] === 'false') {
          this.infoMessage = 'Please Login!';
      }
    });
  }

  async onSubmit(): Promise<void> {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const username = this.form.get('username')?.value;
        const password = this.form.get('password')?.value;
        
        this.apiService.login({
          username: username,
          password: password,
          clientId: 'z68j5pm3s9',
          clientSecret:'r5h0du3dv1'
        }).subscribe((response : any) => {
          console.log(response)
          let token = response.token;
          localStorage.setItem("token", token);
          
          this.apiService.getCurrentUser().subscribe((response : any) => {
            let user = response;

            localStorage.setItem('user', JSON.stringify(user));
            this.router.navigate(['/userprofile']);

          });
        },(error:any) => {
          this.errorMessage = error.error});

      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
}