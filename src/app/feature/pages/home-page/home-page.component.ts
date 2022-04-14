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
  //@Input loadId: string;
  constructor(private loadServise: LoadService) { }

  ngOnInit(): void {
    //this.loadServise.loadLoadList(this.loadId, 5).subscribe(loadList => {
    //  this.loadList =  loadList;
    //});
  }

}
 

  

  
  

