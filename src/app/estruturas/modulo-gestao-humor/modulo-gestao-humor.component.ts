import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modulo-gestao-humor',
  standalone: true,
  imports: [],
  templateUrl: './modulo-gestao-humor.component.html',
  styleUrl: './modulo-gestao-humor.component.css'
})
export class ModuloGestaoHumorComponent {

  @Input() status!: string; 
  @Input() valor!: number; 
  @Input() imgSrc!: string; 
  @Input() funcionarios!: number; 
  @Input() equipes!: number; 

}
