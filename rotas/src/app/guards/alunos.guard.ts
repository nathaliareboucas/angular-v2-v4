import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AlunosGuard implements CanActivateChild {

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        // console.log(childRoute);
        // console.log(state);

        console.log('AlunosGuard: Guarda de rota filha');

        if (state.url.includes('editar')) {
            // alert('Usuário sem acesso');
            // return Observable.of(false);
        }
        return true;
    }

}
