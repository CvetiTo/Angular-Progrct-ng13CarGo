import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadService } from 'src/app/core/load.service';

@Component({
  selector: 'app-new-load',
  templateUrl: './new-load.component.html',
  styleUrls: ['./new-load.component.css']
})
export class NewLoadComponent implements OnInit {

  constructor(
    private router: Router,
    private loadService: LoadService
    ) { }

  ngOnInit(): void {
  }

  create(form: NgForm): void {
    if(form.invalid) { return; }
    //console.log(form.value);
    this.loadService.create(form.value).subscribe({
      next: (load) => {
        //console.log(load);
        this.router.navigate(['/loads']);
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
