import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.scss'],
})
export class ExercicioPipesComponent {
  filme = {
    titulo: 'Harry Potter e a pedra',
    estrelas: 4.456667,
    precoAluguel: 15.45,
    dataLancamento: new Date(2019, 11, 25),
  };

  compras = [
    {
      produto: 'lâmpadas',
      valor: 299.99,
      quantidade: 2,
      peso: 0,
      data: new Date(2020, 1, 1, 15, 20),
    },
    {
      produto: 'farinha',
      valor: 450.29,
      quantidade: 2,
      peso: 29.33333333,
      data: new Date(2020, 1, 10, 19, 30),
    },
  ];
}
