import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AlunoComponent } from './aluno.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoRoutingModule } from './aluno.routing.module';
import { AlunoService } from './aluno.service';
import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

@NgModule ({
    imports: [
        CommonModule,
        AlunoRoutingModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        AlunoComponent,
        AlunoFormComponent,
        AlunoDetalheComponent
    ],
    providers: [
        AlunoService,
        AlunosDeactivateGuard,
        AlunoDetalheResolver
    ],
})
export class AlunoModule {

}
