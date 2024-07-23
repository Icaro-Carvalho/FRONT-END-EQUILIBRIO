import { Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { TrocarSenhaComponent } from './paginas/trocar-senha/trocar-senha.component';
import { HeaderComponent } from './estruturas/header/header.component';
import { SolicitacoesAjustesComponent } from './paginas/solicitacoes-ajustes/solicitacoes-ajustes.component';


export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'trocar-senha', component: TrocarSenhaComponent},
    {path: 'solicitacoes-ajustes', component: SolicitacoesAjustesComponent}
];
