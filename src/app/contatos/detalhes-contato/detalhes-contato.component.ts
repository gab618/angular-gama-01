import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize, take } from 'rxjs/operators';
import { Contato } from '../contatos.interfaces';
import { DetalhesContatoService } from './detalhes-contato.service';

@Component({
  selector: 'app-detalhes-contato',
  templateUrl: './detalhes-contato.component.html',
  styleUrls: ['./detalhes-contato.component.scss'],
})
export class DetalhesContatoComponent implements OnInit {
  contactId: string;
  contactData: Contato;
  loading: boolean;
  loadError: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private detalhesContatoService: DetalhesContatoService
  ) {}

  ngOnInit(): void {
    this.getContactId();
    this.getContactData(this.contactId);
  }

  getContactId() {
    this.contactId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  getContactData(id: string) {
    this.loading = true;
    this.detalhesContatoService
      .getContactData(id)
      .pipe(
        take(1),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((response) => {
        this.contactData = response;
      });
  }
}
