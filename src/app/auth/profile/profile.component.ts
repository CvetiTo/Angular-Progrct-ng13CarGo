import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: IUser[] | undefined;
  get username(): string {
    return this.userService.user?.username  || '';
  }
  get email(): string {
    return this.userService.user?.email  || '';
  }
  get telephone(): string {
    return this.userService.user?.telephone  || '';
  }
  //isInEditMode: boolean = false;

  constructor(private userService: UserService, 
    private router: Router) { }

  ngOnInit(): void {
    this.userService.getProfile().subscribe(user => {
      this.user})
  }
  
}
