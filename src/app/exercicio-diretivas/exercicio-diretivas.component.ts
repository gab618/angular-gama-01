import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss'],
})
export class ExercicioDiretivasComponent {
  exibir = true;

  trocarValor($event) {
    this.exibir = !this.exibir;
  }

  soma(n1, n2) {
    return n1 + n2;
  }
}
