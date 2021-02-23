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

  saveContact() {
    console.log(this.contatoForm);
  }
}
