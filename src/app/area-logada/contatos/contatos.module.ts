import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosRoutingModule } from './contatos-routing.module';
import { ContatosComponent } from './contatos.component';
import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';

@NgModule({
  declarations: [ContatosComponent, DetalhesContatoComponent],
  imports: [CommonModule, ContatosRoutingModule],
})
export class ContatosModule {}
