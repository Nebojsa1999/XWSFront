import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getAuthHeader() : any {

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }

    return {
      headers: headers
    };
  }

  register(data: any) {
    return this.http.post(this.baseURL + "/api/users/user/register", data);
  }


  updateProfile(data: any) {
    return this.http.put(this.baseURL + "/api/users/user/updateProfile", data, this.getAuthHeader());
  }

  login(data: any) : any {
    return this.http.post(this.baseURL + "/api/users/auth/login", data);
  }

  getCurrentUser() : any {
    return this.http.get(this.baseURL + "/api/users/auth/current", this.getAuthHeader());
  }

  search(data:any) {
    return this.http.post(this.baseURL + "/api/users/user/search", data);
  }

  getPublicUsers()
  {
    return this.http.get(this.baseURL + "/api/users/user/getPublicUsers", this.getAuthHeader());
  }

  getUsersThatIFollow()
  {
    return this.http.get(this.baseURL + "/api/users/user/getUsersThatIFollow",this.getAuthHeader());
  }
  getUsersThatSendRequest()
  {
    return this.http.get(this.baseURL + "/api/users/user/getUsersThatSentRequest",this.getAuthHeader());
  }
  
  getUsersThatIDontFollow()
  {
    return this.http.get(this.baseURL + "/api/users/user/getUsersThatIDontFollow",this.getAuthHeader());
  }
  createPost(data: any) {
    return this.http.post(this.baseURL + "/api/posts/post/create", data);
  }

  getPostsPublicUser(data:any)
  {
    return this.http.post(this.baseURL + "/api/posts/post/getPostsPublicUser", data);
  }
  getPostsFollowedUser(data:any)
  {
    return this.http.post(this.baseURL + "/api/posts/post/getPostsFromFollowedUser", data);
  }
  follow(data:any)
  {
    return this.http.post(this.baseURL + "/api/users/userFollow/follow",data,this.getAuthHeader())
  }
  accept(data:any)
  {
    return this.http.put(this.baseURL + "/api/users/user/acceptFollow/" + data.id, data);
  }
  decline(data:any)
  {
    return this.http.put(this.baseURL + "/api/users/user/declineFollow/" + data.id, data);
  }

  comment(data:any)
  {
    return this.http.post(this.baseURL + "/api/posts/comment/postComment",data)
  }
  react(data:any)
  {
    return this.http.post(this.baseURL + "/api/posts/reaction/postReaction",data)
  }
  getReactionByUserAndPost(data:any)
  {
    return this.http.post(this.baseURL + "/api/posts/reaction/getReactionByUserAndPost", data);

  }
  getCommentsByPost(data:any)
  {
    return this.http.get(this.baseURL + "/api/posts/comment/getCommentsByPost/"+ data.postId,data);
  }
  getReactionsByPost(data:any)
  {
    return this.http.get(this.baseURL + "/api/posts/reaction/getReactionsByPost/"+ data.postId,data);
  }
  get(data:any)
  {
    return this.http.get(this.baseURL+ "/api/posts/post/" + data.id,data);
  }
  getUser(data:any)
  {
    return this.http.get(this.baseURL+ "/api/users/user/" + data.id,data);

  }
  getAllUsers()
  {
    return this.http.get(this.baseURL+ "/api/users/user/getAll");
  }
}