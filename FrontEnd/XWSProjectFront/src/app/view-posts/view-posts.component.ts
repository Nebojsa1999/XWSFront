import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.scss']
})
export class ViewPostsComponent implements OnInit {
  publicUsers: any;
  followedUsers:any;
  user : any;
  listUsers: Array<Number> = [];
  listUsersFollowed: Array<Number> = [];
  data: any;
  data2: any;
  postId: any
  displayedColumns: string[] = ['Content', 'Image', 'Link','Url'];
  
  constructor(private apiService: ApiService,private router: Router) {
    const userString = localStorage.getItem('user');

    if(!userString) {
      return;
    }
  
    this.user = JSON.parse(userString);

   }

  ngOnInit(): void {
    
    this.apiService.getPublicUsers().subscribe((response : any) =>{
      this.publicUsers = response;
      for(let item of response){
        this.listUsers.push(item.id)
      }

      this.apiService.getPostsPublicUser({
        userIds: this.listUsers
      }).subscribe((response : any) =>{
        this.data = response;
    
      })
    })

    this.apiService.getUsersThatIFollow().subscribe((response : any) =>{
      this.followedUsers = response;
      for(let item2 of response){
        this.listUsersFollowed.push(item2.id)
      }
    
      this.apiService.getPostsFollowedUser({
        userIds: this.listUsersFollowed
      }).subscribe((response : any) =>{
        this.data2 = response;
    
      })
    })

    
}

comment  (id:any) 
{
  
    this.apiService.comment({
      PostId: id,
      UserId: this.user.id,
    }).subscribe((response : any) => {
        this.router.navigate(['/userprofile']);
     
    });
}

like  (id:any) 
{
    this.apiService.react({
      PostId: id,
      UserId: this.user.id,
      Reactions: 0
    }).subscribe((response : any) => {
        this.router.navigate(['/userprofile']);
     
    });
}
dislike(id:any)
{
  this.apiService.react({
    PostId: id,
    UserId: this.user.id,
    Reactions: 1
  }).subscribe((response : any) => {
      this.router.navigate(['/userprofile']);
   
  });
}
}
