import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable()
export class AuthService {

  // tslint:disable-next-line:no-inferrable-types
  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'usuario@email.com' && usuario.senha === '123456') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.mostrarMenuEmitter.emit(false);
      this.usuarioAutenticado = false;
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

}
