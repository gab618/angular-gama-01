import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'extrato', component: ExtratoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
