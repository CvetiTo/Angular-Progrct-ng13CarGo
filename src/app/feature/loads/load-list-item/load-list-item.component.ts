import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ILoad } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-load-list-item',
  templateUrl: './load-list-item.component.html',
  styleUrls: ['./load-list-item.component.css']
})
export class LoadListItemComponent implements OnChanges {
  isLoggedIn: boolean = this.userService.isLogged;
  //canSubscribe: boolean = false;
  @Input() load: ILoad | undefined;

  constructor( private userService: UserService) { }
 
  ngOnChanges(): void {
    console.log(this.load);
    //this.canSubscribe = !this.load;
  }

}
