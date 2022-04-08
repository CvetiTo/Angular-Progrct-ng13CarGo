import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TruckService } from 'src/app/core/truck.service';

@Component({
  selector: 'app-new-truck',
  templateUrl: './new-truck.component.html',
  styleUrls: ['./new-truck.component.css']
})
export class NewTruckComponent implements OnInit {

  constructor(
    private router: Router,
    private truckService: TruckService
  ) { }

  ngOnInit(): void {
  }

  create(form: NgForm): void {
    if(form.invalid) { return; }
    console.log(form.value);
    this.truckService.create(form.value).subscribe({
      next: (truck) => {
        console.log(truck);
        this.router.navigate(['/trucks']);
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
