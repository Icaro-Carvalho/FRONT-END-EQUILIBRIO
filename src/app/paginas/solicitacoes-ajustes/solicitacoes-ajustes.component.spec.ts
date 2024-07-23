import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacoesAjustesComponent } from './solicitacoes-ajustes.component';

describe('SolicitacoesAjustesComponent', () => {
  let component: SolicitacoesAjustesComponent;
  let fixture: ComponentFixture<SolicitacoesAjustesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacoesAjustesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitacoesAjustesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
