import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-solicitacoes-ajustes',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './solicitacoes-ajustes.component.html',
  styleUrl: './solicitacoes-ajustes.component.css'
})
export class SolicitacoesAjustesComponent {
  faSearch = faSearch;

  selectedStatus = 'Pendentes';
  indicatorPosition = '0%';

  selectStatus(status: string) {
    this.selectedStatus = status;
    switch (status) {
      case 'Pendentes':
        this.indicatorPosition = '0%';
        break;
      case 'Aprovados':
        this.indicatorPosition = '33.33%';
        break;
      case 'Reprovados':
        this.indicatorPosition = '66.66%';
        break;
    }
  }

}
