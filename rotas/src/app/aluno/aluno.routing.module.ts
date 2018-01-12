import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { AlunosGuard } from './../guards/alunos.guard';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlunoComponent } from './aluno.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

const alunosRoutes = [
    { path: '', component: AlunoComponent,
      canActivateChild: [AlunosGuard],
      children: [
        { path: 'novo', component: AlunoFormComponent},
        { path: ':id', component: AlunoDetalheComponent,
            resolve: { aluno: AlunoDetalheResolver }
        },
        { path: ':id/editar', component: AlunoFormComponent,
            canDeactivate: [AlunosDeactivateGuard]
        },
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [
        RouterModule
    ]
})
export class AlunoRoutingModule {

}
