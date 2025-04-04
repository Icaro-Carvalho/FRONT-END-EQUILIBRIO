import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modulo-top3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modulo-top3.component.html',
  styleUrl: './modulo-top3.component.css'
})
export class ModuloTop3Component {

  @Input() situacao!: string;
  @Input() quantidade!: number;
  @Input() imgSrc!: string;
  @Input() afetado!: string;
  @Input() equipes: { nome: string; cor: string }[] = [];

}
