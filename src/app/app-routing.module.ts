import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './area-logada/contatos/contatos.component';
import { DetalhesContatoComponent } from './area-logada/contatos/detalhes-contato/detalhes-contato.component';
import { ExtratoComponent } from './area-logada/extrato/extrato.component';
import { HomeComponent } from './area-logada/home/home.component';
import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { EstaLogadoGuard } from './shared/guards/esta-logado/esta-logado.guard';
import { NaoEstaLogadoGuard } from './shared/guards/nao-esta-logado/nao-esta-logado.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./area-logada/area-logada.module').then(
        (m) => m.AreaLogadaModule
      ),
    canActivate: [EstaLogadoGuard],
  },

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NaoEstaLogadoGuard],
  },

  { path: '**', component: NaoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
