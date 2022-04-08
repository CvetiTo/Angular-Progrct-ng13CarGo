import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-loads-page',
  templateUrl: './loads-page.component.html',
  styleUrls: ['./loads-page.component.css']
})
export class LoadsPageComponent implements OnInit {
  isLoggedIn: boolean = this.userService.isLogged;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
