import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private userService: UserService, private router: Router, 
    private activatedRoute: ActivatedRoute) {

   }


  login(form: NgForm): void {
    // TODO : validate user's data.
    //if(form.invalid) { return; }
    const user = form.value;
    console.log(form.value)
    this.userService.login(user).subscribe({
      next: user => {
        console.log(user)
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.log(err);
      }
      
    });
    
  }

}
