import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-novo-contato',
  templateUrl: './novo-contato.component.html',
  styleUrls: ['./novo-contato.component.scss'],
})
export class NovoContatoComponent implements OnInit {
  contatoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contatosService: ContatosService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contatoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      ag: ['', [Validators.required, Validators.minLength(4)]],
      cc: ['', [Validators.required, Validators.minLength(5)]],
      banco: ['', Validators.required],
    });
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
      // this.contatoForm.controls.nome.markAsTouched();
      // this.contatoForm.controls.email.markAsTouched();
      // this.contatoForm.controls.banco.markAsTouched(); //jeito NA
      this.validateAllFormFields();

      return;
    }
    console.log(this.contatoForm);
    this.saveContact();
  }

  saveContact() {
    this.contatosService.createContato(this.contatoForm.value).subscribe(
      (response) => this.onSuccessSalvarContato(),
      (error) => this.onErrorSalvarContato()
    );
  }

  onSuccessSalvarContato() {
    this.contatosService.createContato(this.contatoForm.value);
    this.toastr.success('Sucesso!', 'Contato criado com sucesso.');
    this.router.navigate(['/contatos']);
  }

  onErrorSalvarContato() {
    this.toastr.error('Error!', 'Ta tudo quebrado.');
  }
}
