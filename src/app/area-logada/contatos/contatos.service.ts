import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contato } from './contatos.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ContatosService {
  API_URL = environment.API_URL;

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ey123456789.imagine_um_token_massa_aqui.7777',
    }),
  };

  constructor(private http: HttpClient) {}

  getContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(`${this.API_URL}/contatos`);
  }

  getContato(contactId: string): Observable<Contato> {
    return this.http.get<Contato>(`${this.API_URL}/contatos/${contactId}`);
  }

  createContato(contato: Contato) {
    return this.http.post<Contato>(`${this.API_URL}/contatos`, contato);
  }

  updateContato(id: string, contato: Contato) {
    return this.http.put<Contato>(`${this.API_URL}/contatos/${id}`, contato);
  }

  deleteContato(contactId: string): Observable<Contato> {
    return this.http.delete<Contato>(`${this.API_URL}/contatos/${contactId}`);
  }
}
