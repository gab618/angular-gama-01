import { Component, OnInit } from '@angular/core';
import { Transacao } from './extrato.interfaces';
import { ExtratoService } from './extrato.service';

import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transacoes: Transacao[];
  loading: boolean;
  erroNoLoad: boolean;

  constructor(private extratoService: ExtratoService) {}

  ngOnInit(): void {
    this.carregarExtrato();
  }

  carregarExtrato() {
    this.loading = true;
    this.erroNoLoad = false;
    this.extratoService
      .getTransacoes()
      .pipe(
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
}
