import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosRoutingModule } from './contatos-routing.module';
import { ContatosComponent } from './contatos.component';
import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';
import { NovoContatoComponent } from './novo-contato/novo-contato.component';

@NgModule({
  declarations: [ContatosComponent, DetalhesContatoComponent, NovoContatoComponent],
  imports: [CommonModule, ContatosRoutingModule],
})
export class ContatosModule {}
