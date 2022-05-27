import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { FollowPageComponent } from './follow-page/follow-page.component';
import { FollowRequestsComponent } from './follow-requests/follow-requests.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { UsersIFollowComponent } from './users-ifollow/users-ifollow.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FrontpageComponent,
    UserPageComponent,
    UpdateProfileComponent,
    ViewPostsComponent,
    CreatePostComponent,
    FollowPageComponent,
    FollowRequestsComponent,
    SendMessageComponent,
    SinglePostComponent,
    UsersIFollowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatNativeDateModule,
    MatMenuModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,  
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
