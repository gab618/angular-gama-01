import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosRoutingModule } from './contatos-routing.module';
import { ContatosComponent } from './contatos.component';
import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';
import { EditarContatoComponent } from './editar-contato/editar-contato.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContatosComponent,
    DetalhesContatoComponent,
    EditarContatoComponent,
  ],
  imports: [CommonModule, ContatosRoutingModule, ReactiveFormsModule],
})
export class ContatosModule {}
