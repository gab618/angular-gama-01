import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contato } from '../contatos.interfaces';

@Injectable({
  providedIn: 'root',
})
export class DetalhesContatoService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getContactData(contactId: string): Observable<Contato> {
    return this.http.get<Contato>(`${this.API_URL}/contatos/${contactId}`);
  }
}
