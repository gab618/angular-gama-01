import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() title: string;
  showHeader = true;

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    setTimeout(() => {
      this.showHeader = false;
    }, 1000 * 3);
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('Fui destruido');
  }
}
