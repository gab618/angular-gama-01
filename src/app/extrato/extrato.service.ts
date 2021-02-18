import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transacao } from './extrato.component';

@Injectable({
  providedIn: 'root',
})
export class ExtratoService {
  constructor(private http: HttpClient) {}

  getTransacoes(): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(
      'http://my-json-server.typicode.com/vitorfgsantos/fake-api/transacoes'
    );
  }
}
