import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss'],
})
export class ExercicioDataBindingComponent implements OnInit {
  @Input() palavra: string;
  @Output() clicado = new EventEmitter();

  imageURL: string = 'http://lorempixel.com.br/350/350';
  initialValue: string = 'Meu valor inicial';
  isDisabled: boolean = true;
  accessibilityText: string = 'Texto acessível';

  valorDoInput = '';

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    }, 3 * 1000);
  }

  ngOnInit(): void {}

  getImageURL() {
    return this.imageURL;
  }

  onClick(e) {
    console.log('Clicou no botão - ');
    console.log(e.target);
  }

  passouMouse() {
    console.log('olha o mouse passando!');
  }

  digitouAlgo(e) {
    console.log(`É o digitas: ${e.target.value}`);
  }

  onClickBotaoEmissor($event) {
    console.log('Devo emitir informações para o elemento pai');
    this.clicado.emit($event);
  }
}
