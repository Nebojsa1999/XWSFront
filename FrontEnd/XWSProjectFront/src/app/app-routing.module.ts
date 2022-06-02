import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { FollowPageComponent } from './follow-page/follow-page.component';
import { FollowRequestsComponent } from './follow-requests/follow-requests.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { JobOffersComponent } from './job-offers/job-offers.component';
import { LoginComponent } from './login/login.component';
import { PublicPostsComponent } from './public-posts/public-posts.component';
import { RegisterComponent } from './register/register.component';
import { SearchJobComponent } from './search-job/search-job.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UsersIFollowComponent } from './users-ifollow/users-ifollow.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'updateProfile',
    component: UpdateProfileComponent
  },
  {
    path:'userprofile',
    component: UserPageComponent 
  },
  {
    path:'viewPosts',
    component: ViewPostsComponent
  },
  {
    path:'createPost',
    component: CreatePostComponent
  },
  {
    path:'followPage',
    component: FollowPageComponent
  },
  {
    path:'singlePost',
    component: SinglePostComponent
  },
  {
    path:'usersIFollow',
    component: UsersIFollowComponent
  },
  {
    path:'followRequests',
    component: FollowRequestsComponent
  },
  {
    path:'publicPosts',
    component: PublicPostsComponent
  },
  {
    path:'jobOffers',
    component: JobOffersComponent
  },
  {
    path:'searchJob',
    component: SearchJobComponent
  },

  { path: '', component: FrontpageComponent },
  { path: '**', component: FrontpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
