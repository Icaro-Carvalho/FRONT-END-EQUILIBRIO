import { CommonModule } from '@angular/common';
import { Component, ElementRef, NgModule, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trocar-senha',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trocar-senha.component.html',
  styleUrl: './trocar-senha.component.css'
})


export class TrocarSenhaComponent {

  tipoTemplate: number = 0
  email: String 

  mudarTipoTemplate(tipo: number) {
    this.tipoTemplate = tipo;
  }



}
