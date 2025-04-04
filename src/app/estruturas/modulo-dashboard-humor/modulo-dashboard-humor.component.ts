import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modulo-dashboard-humor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modulo-dashboard-humor.component.html',
  styleUrl: './modulo-dashboard-humor.component.css'
})
export class ModuloDashboardHumorComponent {

  @Input() status!: string;
  @Input() quantidade!: number;
  @Input() imgSrc!: string; 
  @Input() cardWidth: string = '212px';

}
