import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login = {
    email: 'email@email.com',
    password: '12345678',
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form) {
    console.log(form);
  }
}
