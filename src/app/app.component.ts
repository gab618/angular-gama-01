import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Meu título massa';

  palavra = 'Palavrassa bullet';

  showHeader = true;

  // ngOnInit() {
  //   setTimeout(() => {
  //     this.showHeader = false;
  //   }, 1000 * 3);
  // }

  eventoRecebido($event) {
    console.log('AppComponent: EVENTO RECEBIDO! ', $event);
  }
}
