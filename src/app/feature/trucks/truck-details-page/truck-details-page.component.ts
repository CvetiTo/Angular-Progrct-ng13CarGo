import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOffer, ITruck } from 'src/app/core/interfaces';
import { TruckService } from 'src/app/core/truck.service';

@Component({
  selector: 'app-truck-details-page',
  templateUrl: './truck-details-page.component.html',
  styleUrls: ['./truck-details-page.component.css']
})
export class TruckDetailsPageComponent implements OnInit {

  truck: ITruck<IOffer> | undefined;
isLogged: boolean = true;
  constructor(private truckServise: TruckService, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const truckId = params['truckId'];
      console.log(params);
      this.truckServise.getById(truckId).subscribe(truck => {
        this.truck = truck;
        console.log(truck);
      })
    })
  }

}
