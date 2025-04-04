import { Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { TrocarSenhaComponent } from './paginas/trocar-senha/trocar-senha.component';
import { HeaderComponent } from './estruturas/header/header.component';
import { HistoricoPontoComponent } from './paginas/historico-ponto/historico-ponto.component';
import { GestaoBemEstarComponent } from './paginas/gestao-bem-estar/gestao-bem-estar.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';


export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'trocar-senha', component: TrocarSenhaComponent},
    {path: 'historico-ponto', component: HistoricoPontoComponent},
    {path: 'gestao-bem-estar', component: GestaoBemEstarComponent},
    {path: 'dashboard', component: DashboardComponent},
];
