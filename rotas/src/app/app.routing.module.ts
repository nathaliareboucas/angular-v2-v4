import { NgModule, Component, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './guards/auth.guard.service';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const appRoutes: Routes = [
    {
        path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule',
        canActivate: [AuthGuardService],
        canActivateChild: [CursosGuard],
        canLoad: [AuthGuardService]
    },
    {
        path: 'aluno', loadChildren: 'app/aluno/aluno.module#AlunoModule',
        canActivate: [AuthGuardService],
//        canActivateChild: [AlunosGuard]
        canLoad: [AuthGuardService]
    },
//  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
//  { path: 'cursos', component: CursosComponent },
//  { path: 'curso/:id', component: CursoDetalheComponent },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'home', component: HomeComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '', component: HomeComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: '**', component: PaginaNaoEncontradaComponent,
        canActivate: [AuthGuardService]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
