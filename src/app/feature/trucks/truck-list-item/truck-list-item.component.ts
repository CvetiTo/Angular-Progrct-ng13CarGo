import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ITruck } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-truck-list-item',
  templateUrl: './truck-list-item.component.html',
  styleUrls: ['./truck-list-item.component.css']
})
export class TruckListItemComponent implements OnChanges {
  isLoggedIn: boolean = this.userService.isLogged;
  @Input() truck: ITruck | undefined;
  constructor( private userService: UserService) { }

  ngOnChanges(): void {
    console.log(this.truck);
    
  }

}
