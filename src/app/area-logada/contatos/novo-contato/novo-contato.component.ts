import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-novo-contato',
  templateUrl: './novo-contato.component.html',
  styleUrls: ['./novo-contato.component.scss'],
})
export class NovoContatoComponent implements OnInit {
  contatoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // this.contatoForm = new FormGroup({
    //   nome: new FormControl(),
    //   banco: new FormControl(),
    // });

    this.contatoForm = this.formBuilder.group({
      nome: ['aaa', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      banco: ['', [Validators.required, Validators.minLength(3)]],
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

  saveContact() {
    if (this.contatoForm.invalid) {
      // this.contatoForm.controls.nome.markAsTouched();
      // this.contatoForm.controls.email.markAsTouched();
      // this.contatoForm.controls.banco.markAsTouched(); //jeito NA
      this.validateAllFormFields();

      return;
    }
    console.log(this.contatoForm);
  }
}
