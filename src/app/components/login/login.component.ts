import { Component } from '@angular/core';
import { Router } from '@angular/router';

export class Login {
  username!: string;
  password!: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginObj: Login = {
    username: '',
    password: '',
  };

  constructor(private router: Router) {}

  login() {
    if (this.loginObj.username == 'admin' && this.loginObj.password == '123') {
      this.router.navigateByUrl('/products');
    } else {
      alert('Wrong Credentials');
    }
  }
}
