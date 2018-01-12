import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Aluno } from '../aluno';
import { AlunoService } from './../aluno.service';

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {
    constructor(private alunoService: AlunoService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {
            console.log('AlunoDetalheResolve');
            // tslint:disable-next-line:prefer-const
            let id = route.params['id'];
            return this.alunoService.getAluno(id);
    }
}
