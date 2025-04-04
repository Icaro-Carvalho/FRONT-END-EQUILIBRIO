import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-trocar-senha',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ToastModule],
  templateUrl: './trocar-senha.component.html',
  styleUrl: './trocar-senha.component.css',
  providers: [MessageService]
})


export class TrocarSenhaComponent {

  email = '';
  codigo: '';
  novaSenha = '';
  repitaNovaSenha: string = '';

  tipoTemplate: number = 0

  temMaiuscula: boolean = false;
  temMinuscula: boolean = false;
  temNumero: boolean = false;
  temCaractere: boolean = false;

  constructor(private authService: LoginService, private messageService: MessageService, private router: Router) {}
   

  emailValido(): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(this.email);
  }

  senhaValida(): boolean {
    return this.novaSenha === this.repitaNovaSenha &&
           this.temMaiuscula &&
           this.temMinuscula &&
           this.temNumero &&
           this.temCaractere;
  }

  validarSenha() {
    this.temMaiuscula = /[A-Z]/.test(this.novaSenha);
    this.temMinuscula = /[a-z]/.test(this.novaSenha);
    this.temNumero = /[0-9]/.test(this.novaSenha);
    this.temCaractere = /[^A-Za-z0-9]/.test(this.novaSenha);
  }


  enviarCodigo(){
    this.authService.enviarCodigo(this.email).subscribe({
      next: () => {
        this.tipoTemplate = 1
      }
    })
  }

  validarCodigo() {
    this.authService.validarCodigo(this.email, this.codigo).subscribe({
      next: () => {
        this.tipoTemplate = 2
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Código Inválido', detail: 'O código informado está incorreto ou expirou. Solicite um novo código e tente novamente.' });
      }
    })
  }

  trocarSenha() {
    this.authService.trocarSenha(this.email, this.novaSenha).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Parabéns', detail: 'Senha alterada com sucesso!' });
        this.router.navigate(['/login']);
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Algo deu errado', detail: 'Não foi possível alterar sua senha no momento. Tente novamente mais tarde.' });
      }
    })
  }

  mudarTipoTemplate(tipo: number) {
    this.tipoTemplate = tipo;
  }

  mudarFoco(atual: HTMLInputElement, proximo: HTMLInputElement) {
    if (atual.value.length === 1) {
        proximo.focus();
    }
  }

  voltarFoco(event: KeyboardEvent, anterior: HTMLInputElement) {
    if (event.key === "Backspace" && (event.target as HTMLInputElement).value === "") {
        anterior.focus();
    }
  }

  pegarCodigo(input1: any, input2: any, input3: any, input4: any) {
    this.codigo = input1.value + input2.value + input3.value + input4.value;
  }



}
