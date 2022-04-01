import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: '',
      password: '',
      rePass: ''
    })
   }

  ngOnInit(): void {
  }

  register(): void {
    const data = this.form.value;
    this.isLoading = true;
    this.userService.register(data).subscribe({
        next: () => {
          this.router.navigate(['/']);
          this.isLoading = false;
        },
        error: (err) => {
          this.isLoading = false;
          console.error(err);
        }
      })
    }
   //(() => {
   //  this.isLoading = false;
   //  this.router.navigate(['/login']);
   //})

  //  if (this.form.invalid) { return; }
  //  this.userService.register(this.form.value).subscribe({
  //    next: () => {
  //      this.router.navigate(['/']);
  //    },
  //    error: (err) => {
  //      console.error(err);
  //    }
  //  })
  //}

  
}
