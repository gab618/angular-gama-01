import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login = {
    email: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form) {
    if (!form.valid) {
      form.controls.email.markAsTouched();
      form.controls.password.markAsTouched();
      return;
    }
    console.log(form);
  }

  isValid(nomeControle: string, form: FormGroup) {
    if (!form.controls[nomeControle]) {
      return false;
    }

    return (
      form.controls[nomeControle].invalid && form.controls[nomeControle].touched
    );
  }
}
