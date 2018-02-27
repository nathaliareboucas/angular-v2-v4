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

    // form.value();
    // console.log(this.usuario);

    this.http.post('http://httpbin.org/post', JSON.stringify(form.value))
      .map(res => res)
      .subscribe(dados => console.log(dados));

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

  consultaCEP(cep, form) {
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
        this.resetaDadosFormulario(form);
        this.http.get(`//viacep.com.br/ws/${cep}/json`)
        .map(dados => dados.json())
        .subscribe(dados => this.populaDadosForm(dados, form));
      }
    }
  }

  populaDadosForm(dados, formulario) {
    /* formulario.setValue({
      nome: formulario.value.nome,
      email: formulario.value.email,
      endereco: {
        cep: dados.cep,
        numero: '',
        logradouro: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    }); */

    formulario.form.patchValue({
      endereco: {
        cep: dados.cep,
        logradouro: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaDadosFormulario(formulario) {
    formulario.form.patchValue({
      endereco: {
        cep: null,
        logradouro: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

}
