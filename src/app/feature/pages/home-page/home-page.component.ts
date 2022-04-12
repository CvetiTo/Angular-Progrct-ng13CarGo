import { Component, Input, OnInit } from '@angular/core';
import { ILoad } from 'src/app/core/interfaces';
import { LoadService } from 'src/app/core/load.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
//loadList: ILoad[] | undefined;
  constructor(private loadServise: LoadService) { }

  ngOnInit(): void {
   // this.loadServise.loadLoadList().subscribe(loadList => {
   //   this.loadList =  loadList;
   // });
  }

}
 

  

  
  

