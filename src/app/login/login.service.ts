import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';
import { AuthService } from '../shared/services/auth/auth.service';
import { Login } from './login.interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  logar(email: string, password: string): Observable<Login> {
    // if (email === 'gstv@caster.com' && password === '123456') {
    //   return of({
    //     user: {
    //       id: 24,
    //       name: 'gstv',
    //       email: 'gstv@caster.com',
    //       is_admin: false,
    //       avatar: {
    //         url:
    //           'https://bolaocblol.tk/files/086f1fa39295ff36fde9110b761f7d53.jpg',
    //         id: 72,
    //         path: '086f1fa39295ff36fde9110b761f7d53.jpg',
    //       },
    //     },
    //     token:
    //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsImlhdCI6MTYxMzgyMzMwNiwiZXhwIjoxNjE2NDE1MzA2fQ.2sDS0w6vZYkHfhlLhXWMXdY8iF4SAmarpGcj8EwwqCU',
    //   }).pipe(delay(2000));
    // }

    // return timer(3000).pipe(
    //   mergeMap(() => throwError('Usuário ou senha incorretos'))
    // );

    return this.http
      .post<Login>('https://bolaocblol.tk/sessions', {
        email,
        password,
      })
      .pipe(
        tap((res) => {
          this.authService.setUser(res.user);
          this.authService.setToken(res.token);
        })
      );
  }
}
