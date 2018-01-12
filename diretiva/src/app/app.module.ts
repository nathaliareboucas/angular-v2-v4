import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms'
import { NgModel } from '@angular/forms'

import { AppComponent } from './app.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { ExemploNgContentComponent } from './exemplo-ng-content/exemplo-ng-content.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    DiretivaNgstyleComponent,
    NgForm,
    NgModel,
    OperadorElvisComponent,
    ExemploNgContentComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
