import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs/Rx';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../aluno';



@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: Aluno;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunoService: AlunoService) { }

  ngOnInit() {
  /*  this.inscricao = this.route.params.subscribe(
      (params: any) => {
        // tslint:disable-next-line:prefer-const
        let id = params['id'];

        this.aluno = this.alunoService.getAluno(id);
      }
    ); */
    console.log('ngOnInit: AlunoDetalheComponent');

    this.inscricao = this.route.data.subscribe(
      (info: {aluno: Aluno}) => {
        console.log('Recebendo o objeto aluno do resolver');
        this.aluno = info.aluno;
      }
    );
  }

  editarContato() {
    this.router.navigate(['/aluno', this.aluno.id, 'editar']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
