import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-public-posts',
  templateUrl: './public-posts.component.html',
  styleUrls: ['./public-posts.component.scss']
})
export class PublicPostsComponent implements OnInit {
  displayedColumns: string[] = ['Name','Content', 'Image', 'Link'];
  data: any;
  publicUsers: any;
  listUsers: Array<Number> = [];
  users: any[] = [];


  constructor(private apiService: ApiService) { }

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

    this.apiService.getAllUsers(
          
      ).subscribe((respone:any)=>
      {
        this.users = respone;
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


}
