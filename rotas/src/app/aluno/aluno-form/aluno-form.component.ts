import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs/Rx';

import { AlunoService } from '../aluno.service';
import { FormCandeactivate } from '../../guards/form-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy, FormCandeactivate {

  aluno: any;
  inscricao: Subscription;
  // tslint:disable-next-line:no-inferrable-types
  private formMudou: boolean = false;


  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunoService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        // tslint:disable-next-line:prefer-const
        let id = params['id'];

        this.aluno = this.alunoService.getAluno(id);

        if (this.aluno === null) {
          this.aluno = {};
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
    console.log('mudou');
  }

  podeMudarRota() {
    if (this.formMudou) {
      confirm('Tem certeza que deseja sair dessa página?');
    }
    return true;
  }

  podeDesativar() {
    return this.podeMudarRota();
  }

}
