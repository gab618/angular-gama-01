import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize, take } from 'rxjs/operators';
import { Contato } from './contatos.interfaces';
import { ContatosService } from './contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss'],
})
export class ContatosComponent implements OnInit {
  loading: boolean;
  erroNoLoad: boolean;
  page = 1;
  contatos: Contato[];

  constructor(
    private contatosService: ContatosService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.carregarContatos();
  }

  carregarContatos() {
    this.loading = true;
    this.contatosService
      .getContatos()
      .pipe(
        take(1),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        (response) => this.onSusccess(response),
        (error) => {
          this.erroNoLoad = true;
          console.log(error);
        }
      );
  }

  onSusccess(response: Contato[]) {
    this.contatos = response;
  }

  goToDetails(idContato: string) {
    this.router.navigate([`contatos/${idContato}`]);
  }

  deleteContact(idContato: string) {
    this.contatosService.deleteContato(idContato).subscribe(
      (response) => this.onSuccessDelete(idContato),
      (error) => this.onErrorDelete()
    );
  }

  onSuccessDelete(idContato) {
    console.log('tchau');
    this.contatos = this.contatos.filter((contato) => contato.id !== idContato);
    this.toastr.success('F', 'Usuário apagado!');
  }

  onErrorDelete() {
    console.log('error');
  }
}
