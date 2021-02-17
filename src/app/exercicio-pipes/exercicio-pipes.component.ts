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
}
