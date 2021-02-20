import { Injectable } from '@angular/core';
import { User } from 'src/app/login/login.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User;
  token: string;
  constructor() {}

  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }

  getUser() {
    if (this.user) {
      return this.user;
    }

    const localUser = localStorage.getItem('user');
    if (localUser) {
      this.user = JSON.parse(localUser);
      return this.user;
    }
    return null;
  }

  setToken(token: any) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken() {
    if (this.token) {
      return this.token;
    }

    const token = localStorage.getItem('token');
    if (token) {
      return token;
    }
    return null;
  }
}
