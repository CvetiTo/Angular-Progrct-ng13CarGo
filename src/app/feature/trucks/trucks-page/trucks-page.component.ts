import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-trucks-page',
  templateUrl: './trucks-page.component.html',
  styleUrls: ['./trucks-page.component.css']
})
export class TrucksPageComponent implements OnInit {
  isLoggedIn: boolean = this.userService.isLogged;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
