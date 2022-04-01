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
    // TODO stoimenovg: validate user's data.
    //if(form.invalid) { return; }
    const { email, password } = form.value;
    console.log(form.value)
    this.userService.login({ email, password }).subscribe({
      next: () => {
        //const redirectUrl = this.activatedRoute.snapshot.queryParams.redirectUrl || '/';
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.log(err);
      }
      
    });
    
  }

}
