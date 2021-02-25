import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize, take } from 'rxjs/operators';
import { Contato } from '../contatos.interfaces';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-editar-contato',
  templateUrl: './editar-contato.component.html',
  styleUrls: ['./editar-contato.component.scss'],
})
export class EditarContatoComponent implements OnInit {
  contatoForm: FormGroup;
  idContato: string;
  loading: boolean;
  erroNoLoad: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private contatosService: ContatosService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.inicializarForm();
    this.idContato = this.route.snapshot.paramMap.get('id');
    if (this.estaEditando()) {
      this.carregarContato();
    }
  }

  estaEditando = () => !!this.idContato;

  inicializarForm() {
    this.contatoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      ag: ['', [Validators.required, Validators.minLength(4)]],
      cc: ['', [Validators.required, Validators.minLength(5)]],
      banco: ['', Validators.required],
    });
  }

  carregarContato() {
    this.erroNoLoad = false;
    this.loading = true;
    this.contatosService
      .getContato(this.idContato)
      .pipe(
        take(1),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        (response) => this.onSuccessCarregarContato(response),
        (error) => {
          this.erroNoLoad = true;
        }
      );
  }

  onSuccessCarregarContato(response: Contato) {
    this.contatoForm.patchValue(response);
    console.log(response);
  }

  exibeErro(nomeControle: string) {
    // if(!this.contatoForm.controls[nomeControle]) {//a mesma coisa
    if (!this.contatoForm.get(nomeControle)) {
      return false;
    }

    return (
      this.contatoForm.get(nomeControle).invalid &&
      this.contatoForm.get(nomeControle).touched
    );
  }

  validateAllFormFields() {
    Object.keys(this.contatoForm.controls).forEach((field) => {
      const control = this.contatoForm.get(field);
      control.markAsTouched();
    });
  }

  onSubmit() {
    if (this.contatoForm.invalid) {
      this.validateAllFormFields();
      return;
    }

    if (this.estaEditando()) {
      this.editContact();
      return;
    }
    this.createContact();
  }

  createContact() {
    this.contatosService.createContato(this.contatoForm.value).subscribe(
      (response) => this.onSuccessCreateContact(),
      (error) => this.onError()
    );
  }

  onSuccessCreateContact() {
    this.toastr.success('Sucesso!', 'Contato criado com sucesso.');
    this.router.navigate(['/contatos']);
  }

  editContact() {
    this.contatosService
      .updateContato(this.idContato, this.contatoForm.value)
      .subscribe(
        (response) => this.onSuccessEditContact(),
        (error) => this.onError()
      );
  }

  onSuccessEditContact() {
    this.toastr.success('Sucesso!', 'Contato editado com sucesso.');
    this.router.navigate(['/contatos']);
  }

  onError() {
    this.toastr.error('Error!', 'Ta tudo quebrado.');
  }
}
