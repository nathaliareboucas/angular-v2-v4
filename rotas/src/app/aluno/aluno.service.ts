import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable()
export class AlunoService {

  private alunos: Aluno[] = [
    {id: 1, nome: 'Aluno 01', email: 'aluno01@gmail.com'},
    {id: 2, nome: 'Aluno 02', email: 'aluno02@gmail.com'},
    {id: 3, nome: 'Aluno 03', email: 'aluno03@gmail.com'},
    {id: 4, nome: 'Aluno 04', email: 'aluno04@gmail.com'},
  ];

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    for (let i = 0; i < this.alunos.length; i++) {
      // tslint:disable-next-line:prefer-const
      let aluno = this.alunos[i];
      // tslint:disable-next-line:triple-equals
      if (aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }

  constructor() { }

}
