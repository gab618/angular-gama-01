import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './area-logada/home/home.component';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ExtratoComponent } from './area-logada/extrato/extrato.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { SharedModule } from './shared/shared.module';
import { ContatosComponent } from './area-logada/contatos/contatos.component';
import { DetalhesContatoComponent } from './area-logada/contatos/detalhes-contato/detalhes-contato.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [AppComponent, LoginComponent, NaoEncontradoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HomeComponent,
    FormsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
