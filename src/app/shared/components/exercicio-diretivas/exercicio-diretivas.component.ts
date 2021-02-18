import { Component, OnInit } from '@angular/core';
import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicio-diretivas.constants';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss'],
})
export class ExercicioDiretivasComponent {
  exibir = true;

  listaFrutas = ['Maçã', 'Limão', 'Morango', 'Biscoito'];

  carrosLista = [
    {
      placa: 'ABC-1234',
      cor: 'preto',
    },
    {
      placa: 'WSA-1234',
      cor: 'verde',
    },
    {
      placa: 'XYZ-1234',
      cor: 'vermelhor',
    },
  ];

  PREFIXO_IMAGEM_URL =
    'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images';
  MEMES_AGRUPADOS_POR_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA;

  trocarValor($event) {
    this.exibir = !this.exibir;
  }

  soma(n1, n2) {
    return n1 + n2;
  }
}
