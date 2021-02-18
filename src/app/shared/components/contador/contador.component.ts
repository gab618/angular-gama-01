import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss'],
})
export class ContadorComponent implements OnInit {
  @Input() contador: number;
  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleIncrement($event) {
    this.increment.emit();
  }
  handleDecrement($event) {
    this.decrement.emit();
  }
}
