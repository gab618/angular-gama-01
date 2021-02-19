import { Component, OnInit } from '@angular/core';
import { Transacao } from './extrato.interfaces';
import { ExtratoService } from './extrato.service';

import { finalize, take } from 'rxjs/operators';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transacoes: Transacao[];
  loading: boolean;
  erroNoLoad: boolean;
  page = 1;

  constructor(private extratoService: ExtratoService) {}

  ngOnInit(): void {
    this.carregarExtrato();
  }

  carregarExtrato() {
    this.loading = true;
    this.erroNoLoad = false;

    this.extratoService
      .getTransacoes(this.page)
      .pipe(
        take(1),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        (response) => this.onSuccess(response),
        (error) => this.onError(error)
      );
  }

  onSuccess(response: Transacao[]) {
    this.transacoes = response;
  }

  onError(error: any) {
    this.erroNoLoad = true;
    console.error(error);
  }

  proximaPagina() {
    this.page = this.page + 1;
    this.carregarExtrato();
  }

  paginaAnterior() {
    this.page = this.page - 1;
    this.carregarExtrato();
  }
}
