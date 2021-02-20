import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';
import { Contato } from './contatos.interfaces';
import { ContatosService } from './contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss'],
})
export class ContatosComponent implements OnInit {
  loading: boolean;
  erroNoLoad: boolean;
  page = 1;
  contatos: Contato[];

  constructor(private contatosService: ContatosService) {}

  ngOnInit(): void {
    this.carregarContatos();
  }

  carregarContatos() {
    this.loading = true;
    this.contatosService
      .getContatos()
      .pipe(
        take(1),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        (response) => {
          this.contatos = response;
        },
        (error) => {
          this.erroNoLoad = true;
          console.log(error);
        }
      );
  }
}
