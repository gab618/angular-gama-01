import { Component, OnInit } from '@angular/core';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transacoes: Transacao[];

  constructor(private extratoService: ExtratoService) {}

  ngOnInit(): void {
    this.extratoService.getTransacoes().subscribe((response) => {
      this.transacoes = response;
    });
  }
}
export interface Transacao {
  id: number;
  data: Date;
  descricao: string;
  valor: number;
  categoria: string;
}
