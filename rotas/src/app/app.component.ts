import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';

  // tslint:disable-next-line:no-inferrable-types
  mostrarMenu: boolean = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  ngOnDestroy() {

  }

}
