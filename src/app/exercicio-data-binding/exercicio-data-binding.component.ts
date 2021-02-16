import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss'],
})
export class ExercicioDataBindingComponent implements OnInit {
  @Input() palavra: string;

  imageURL: string = 'http://lorempixel.com.br/350/350';
  initialValue: string = 'Meu valor inicial';
  isDisabled: boolean = true;
  accessibilityText: string = 'Texto acessível';

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    }, 3 * 1000);
  }

  ngOnInit(): void {}

  getImageURL() {
    return this.imageURL;
  }
}
