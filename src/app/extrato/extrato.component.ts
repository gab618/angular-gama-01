import { Component, OnInit } from '@angular/core';
import { Transacao } from './extrato.interfaces';
import { ExtratoService } from './extrato.service';

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
    this.extratoService.getTransacoes().subscribe(
      (response) => {
        this.loading = false;
        this.transacoes = response;
      },
      (error) => {
        this.erroNoLoad = true;
        this.loading = false;
      }
    );
  }
}
