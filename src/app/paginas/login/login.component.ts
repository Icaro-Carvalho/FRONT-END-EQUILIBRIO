import { Component } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ToastModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService]
})
export class LoginComponent {

  email = '';
  senha = '';

  constructor(private loginService: LoginService, private messageService: MessageService, private router: Router) {}

  emailValido(): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(this.email);
  }

  login(): void {
    this.loginService.login(this.email, this.senha).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Credenciais inválidas', detail: 'Por favor, confira seu e-mail e senha.' });
      }
    })
  }

}
