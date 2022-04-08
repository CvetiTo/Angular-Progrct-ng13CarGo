import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ILoad } from 'src/app/core/interfaces';
import { LoadService } from 'src/app/core/load.service';

@Component({
  selector: 'app-load-list',
  templateUrl: './load-list.component.html',
  styleUrls: ['./load-list.component.css']
})
export class LoadListComponent implements OnInit, AfterViewInit {
  loadList: ILoad[] | undefined;
  constructor(private loadServise: LoadService) { }

  ngOnInit(): void {
    this.loadServise.loadLoadList().subscribe(loadList => {
      this.loadList = loadList;
    });
  }

  ngAfterViewInit(): void {
    console.log('View was initialized');
  }

}
