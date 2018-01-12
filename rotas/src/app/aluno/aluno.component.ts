import { Component, OnInit } from '@angular/core';

import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  private alunos: any[] = [];

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.alunos = this.alunoService.getAlunos();
  }

}
