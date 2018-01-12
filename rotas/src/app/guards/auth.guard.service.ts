import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../login/auth.service';


@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

    console.log('AuthGuardService');
    return this.verificarAcesso();
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    console.log('canLoad: verificando se o usuário pode carregar o código do módulo');
    return this.verificarAcesso();
  }

  private verificarAcesso() {
    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
