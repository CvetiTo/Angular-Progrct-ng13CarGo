import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILoad, IOffer } from 'src/app/core/interfaces';
import { LoadService } from 'src/app/core/load.service';

@Component({
  selector: 'app-load-details-page',
  templateUrl: './load-details-page.component.html',
  styleUrls: ['./load-details-page.component.css']
})
export class LoadDetailsPageComponent implements OnInit {
load: ILoad<IOffer> | undefined;
isLogged: boolean = true;
  constructor(private loadServise: LoadService, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const loadId = params['loadId'];
      this.loadServise.loadLoadById(loadId).subscribe(load => {
        this.load = load;
      })
    })
  }

}
