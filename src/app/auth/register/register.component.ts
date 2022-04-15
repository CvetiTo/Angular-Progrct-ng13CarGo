import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  
  isLogged = false;
  
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.required,Validators.minLength(3),  Validators.pattern("[a-zA-Z]+ ?([a-zA-Z]+)?")]],
      email: ['', [Validators.required, Validators.pattern("^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)$")]],
      telephone: ['', [Validators.required,Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(3), ]],
      rePass: ['', [Validators.required,  ]]
    })
   }

  ngOnInit(): void {
  }
  onPasswordChange() {
    if (this.rePass.value == this.password.value) {
      this.rePass.setErrors(null);
    } else {
      this.rePass.setErrors({ mismatch: true });
    }
  }
  
  // getting the form control elements
  get password(): AbstractControl {
    return this.form.controls['password'];
  }
  
  get rePass(): AbstractControl {
    return this.form.controls['rePass'];
  }
  
  register(): void {
    const data = this.form.value;
    this.isLogged = true;
    this.userService.register(data).subscribe({
        next: () => {
          this.isLogged = true;
          this.router.navigate(['/']); 
        },
        error: (err) => {
          this.isLogged = false;
          console.error(err);
        }
      })
    }
   
  clearForm(): void {
    this.form.reset();
  }
  
}
