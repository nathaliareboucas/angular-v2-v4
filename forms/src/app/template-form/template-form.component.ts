import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  };

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
    console.log(this.usuario);
  }

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    // tslint:disable-next-line:semicolon
    }
  }

  consultaCEP(cep) {
    // Nova variável "cep" somente com dígitos
    cep = cep.replace(/\D/g, '');

    // Verifica se campo cep possui valor informado
    if (cep != null) {
      // Expressão regular para validar o CEP
      // tslint:disable-next-line:no-var-keyword
      // tslint:disable-next-line:prefer-const
      let validacep = /^[0-9]{8}$/;

      // Valida o formato do cep
      if (validacep.test(cep)) {
        this.http.get(`//viacep.com.br/ws/${cep}/json`)
        .map(dados => dados.json())
        .subscribe(dados => console.log(dados));
      }
    }
  }

}
