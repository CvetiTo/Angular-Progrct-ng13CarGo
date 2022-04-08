import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ITruck } from 'src/app/core/interfaces';
import { TruckService } from 'src/app/core/truck.service';

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.css']
})
export class TruckListComponent implements OnInit, AfterViewInit {
  truckList: ITruck[] | undefined;
  constructor(private truckService: TruckService) { }

  ngOnInit(): void {
    this.truckService.loadTruckList().subscribe(truckList => {
      this.truckList = truckList;
    });
  }

  ngAfterViewInit(): void {
    console.log('View was initialized');
  }

}
