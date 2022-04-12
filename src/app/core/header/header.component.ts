import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get username(): string {
    return this.userService.user?.username || '';
  }
  isLoggingOut : boolean = false;
  constructor(private userService: UserService, private router: Router ) { }

  logout(): void {
    if(this.isLoggingOut) {
      return;
    }
    this.isLoggingOut = true;
    this.userService.logout().subscribe({
      next: arg => {
        console.log(arg);
      },
      complete:() => {
        this.isLoggingOut = false;
        this.router.navigate(['/']);
      },
      error: () => {
        this.isLoggingOut=false;  
      }
  });
}
}
