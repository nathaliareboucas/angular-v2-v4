import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AlunoFormComponent } from '../aluno/aluno-form/aluno-form.component';
import { FormCandeactivate } from './form-candeactivate';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<FormCandeactivate> {

    canDeactivate(
        component: FormCandeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
        console.log('Guarda de desativação');
        // return component.podeMudarRota();
        return component.podeDesativar();
    }

}

