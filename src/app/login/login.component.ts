import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('emailInput') emailInput: ElementRef;
  @ViewChild('passwordInput') passwordInput: ElementRef;

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

      if (form.controls.email.invalid) {
        this.emailInput.nativeElement.focus();
        return;
      }

      if (form.controls.password.invalid) {
        this.passwordInput.nativeElement.focus();
        return;
      }

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
