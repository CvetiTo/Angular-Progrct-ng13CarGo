import { Component, Input, OnInit } from '@angular/core';
import { IOffer } from 'src/app/core/interfaces';
import { OfferService } from 'src/app/core/offer.service';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {
  now = new Date();
  //@Input loadId: string;

  offerList: IOffer[] | undefined;
  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    //this.offerService.loadOfferList(this.loadId, 5).subscribe(offerList => {
    //  this.offerList = offerList;
    //});
  }

}
