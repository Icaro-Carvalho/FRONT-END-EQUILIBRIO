import { Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { TrocarSenhaComponent } from './paginas/trocar-senha/trocar-senha.component';


export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'trocar-senha', component: TrocarSenhaComponent}
];
