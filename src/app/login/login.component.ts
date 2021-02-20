import { error } from '@angular/compiler/src/util';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('emailInput') emailInput: ElementRef;
  @ViewChild('passwordInput') passwordInput: ElementRef;

  user = {
    email: '',
    password: '',
  };
  loading: boolean;
  loginError: boolean;

  constructor(private loginService: LoginService) {}

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
    this.login();
  }

  login() {
    this.loginError = false;
    this.loading = true;
    this.loginService
      .logar(this.user.email, this.user.password)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        (response) => {
          console.log('sucesso');
          console.log(response);
        },
        (error) => {
          console.log('nao logou :', error);
          this.loginError = true;
        }
      );
  }

  isValid(nomeControle: string, form: NgForm) {
    if (!form.controls[nomeControle]) {
      return false;
    }

    return (
      form.controls[nomeControle].invalid && form.controls[nomeControle].touched
    );
  }
}
