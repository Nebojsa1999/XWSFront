import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
user : any
postIdString: any
postId:any
post:any
reactions:any
form: FormGroup;
dataComments: any[] = [];
dataReactions: any[] = [];
users: any[] = [];
displayedColumnsComments: string[] = ['Name', 'Content'];
displayedColumnsReactions: string[] = ['Name','Reaction']
private formSubmitAttempt = false;
  constructor(     
    private router: Router,
    private api: ApiService  ,
    private route: ActivatedRoute , 
    private fb: FormBuilder,

    ) {
      this.dataComments = []
      this.dataReactions = []
      this.form = this.fb.group({
        content: ['']  
      });
      
     }

  ngOnInit(): void {
    this.postIdString = this.route.snapshot.queryParamMap.get('id');
    this.postId = parseInt(this.postIdString);
    const userString = localStorage.getItem('user');
    if(!userString) {
      return;
    }
  
    this.user = JSON.parse(userString);
 
        this.load()
        this.api.getAllUsers(
          
        ).subscribe((respone:any)=>
        {
          this.users = respone;
        })
      
      }

load()
{
  this.api.getReactionByUserAndPost(
    {
      userId: this.user.id,
      postId: this.postId
    }).subscribe((response:any)=>{
     this.reactions = response
     
    })
  this.api.get({
    id: this.postId

  }).subscribe((respone:any)=>{
    this.post = respone
    
      this.api.getCommentsByPost(
        {
          postId: this.postId
          
        }
      ).subscribe((response:any)=>{
        this.dataComments = response

      })
  
      this.api.getReactionsByPost(
        {
          postId: this.postId
        }
      ).subscribe((response:any)=>{
        this.dataReactions = response

      })
    })

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


  like()
  {
    
    this.api.react(
      {
        userId : this.user.id,
        postId: this.postId,
        Reactions: 0
        
      }).subscribe((response:any)=>{
         this.load()
      })

      
    
  }

  
  dislike()
  {
    this.api.react(
      {
        userId : this.user.id,
        postId: this.postId,
        Reactions: 1
      }).subscribe((response:any)=>{
        this.load()

      })
    
  }

  async onSubmit(): Promise<void> {
    const userString = localStorage.getItem('user');

    if(!userString) {
      return;
    }
  
    const user = JSON.parse(userString);
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      
        const content = this.form.get('content')?.value;
        
        this.api.comment({
          content: content,
          userId : this.user.id,
          postId: this.postId,
        }).subscribe((response : any) => {
          this.load()
         
        });

      } 
    
     else {
      this.formSubmitAttempt = true;
    }
  }

}


