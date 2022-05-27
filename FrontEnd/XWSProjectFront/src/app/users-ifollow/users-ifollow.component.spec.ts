import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersIFollowComponent } from './users-ifollow.component';

describe('UsersIFollowComponent', () => {
  let component: UsersIFollowComponent;
  let fixture: ComponentFixture<UsersIFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersIFollowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersIFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
