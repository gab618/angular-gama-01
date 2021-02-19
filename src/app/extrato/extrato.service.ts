import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Transacao } from './extrato.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ExtratoService {
  API_URL = environment.API_URL;
  constructor(private http: HttpClient) {}

  getTransacoes(): Observable<Transacao[]> {
    // const error = throwError('Erro genérico');
    // return timer(3000).pipe(mergeMap(() => error));

    return this.http.get<Transacao[]>(`${this.API_URL}/transacoes`);
  }
}
