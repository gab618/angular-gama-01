import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-ngclass',
  templateUrl: './exercicio-ngclass.component.html',
  styleUrls: ['./exercicio-ngclass.component.scss'],
})
export class ExercicioNgclassComponent {
  isGreen = false;

  handleColor() {
    this.isGreen = !this.isGreen;
  }
}
