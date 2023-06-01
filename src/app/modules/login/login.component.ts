import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/user';
import { AuthService } from '../../shared/auth-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  User: User[];
  constructor(private fb: FormBuilder, private router: Router, public authApi: AuthService) { }

  ngOnInit() {
    this.initForm();
    this.dataState();
    let s = this.authApi.getUsers();
    s.snapshotChanges().subscribe((data) => {
      this.User = [];
      data.forEach((item) => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.User.push(a as User);
      });
    });
    console.log(this.User);

  }
  dataState() {
    this.authApi.getUsers().valueChanges().subscribe(data => {
    })
  }
  initForm() {
    this.loginForm = this.fb.group({
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
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  submit() {
    console.log(this.loginForm.value);
    this.router.navigate(['dashboard']);
  }

}
