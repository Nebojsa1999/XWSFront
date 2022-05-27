import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  base64Output : string;
  onFileSelected(event:any) {
    this.convertFile(event.target.files[0]).subscribe(base64 => {
      this.base64Output = base64;
    });
  }
  convertFile(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    
    reader.onload = (event) => result.next(btoa(event.target?.result ? event.target.result.toString() : ''));
    
    return result;
    
  } 
  form: FormGroup;
  private formSubmitAttempt = false;
  public loginInvalid = false;

  constructor(    
    private fb: FormBuilder,    
    private apiService: ApiService , 
    private router: Router,
    ) 
    { 

    
    this.form = this.fb.group({
      post: [''],
      link: [''],

    });
  }

  ngOnInit(): void {
 
  
  }

  async onSubmit(): Promise<void> {
    const userString = localStorage.getItem('user');

    if(!userString) {
      return;
    }
  
    const user = JSON.parse(userString);
    console.log(user)
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      
        const post = this.form.get('post')?.value;
        const link = this.form.get('link')?.value;
        
        this.apiService.createPost({
          content: post,
          link: link,
          userId : user.id,
          image : this.base64Output
        }).subscribe((response : any) => {
         
          
            this.router.navigate(['/userprofile']);

         
        });

      } 
    
     else {
      this.formSubmitAttempt = true;
    }
  }

}
