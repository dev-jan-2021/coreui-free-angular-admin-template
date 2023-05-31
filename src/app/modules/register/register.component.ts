import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.fb.group({
      name: [
        '',
        Validators.compose([
          Validators.required
        ]),
      ],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(100),
        ]),
      ],
      confirmPassword:[
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(100),
        ]),
      ]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  submit() {
    console.log(this.registerForm.value);
    this.router.navigate(['dashboard']);
  }
}
