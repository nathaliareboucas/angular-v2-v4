import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
          AfterContentChecked, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
          AfterContentChecked, AfterViewChecked, OnDestroy {

  @Input() valorInicial:number = 10;

  constructor() {
    this.log('Construtor');
  }

  ngOnInit() {
    this.log('onInit');
  }

  ngOnChanges() {
    this.log('onChanges');
  }

  ngDoCheck() {
    this.log('doCheck');
  }

  ngAfterContentInit() {
      this.log('afterContentInit');
  }

  ngAfterContentChecked() {
      this.log('afterContentChecked');
  }

  ngAfterViewChecked() {
      this.log('afterViewChecked');
  }

  ngOnDestroy() {
    this.log('onDestroy');
  }

  private log(hook:String) {
    console.log(hook);
  }
}
