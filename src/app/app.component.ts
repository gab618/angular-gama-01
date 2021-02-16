import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Meu título massa';

  palavra = 'Palavrassa bullet';

  contador = 0;

  eventoRecebido($event) {
    console.log('AppComponent: EVENTO RECEBIDO! ', $event);
  }

  contadorIncrement() {
    this.contador++;
  }
  contadorDecrement() {
    this.contador--;
  }
}
