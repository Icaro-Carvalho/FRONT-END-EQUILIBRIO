import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloGestaoHumorComponent } from './modulo-gestao-humor.component';

describe('ModuloGestaoHumorComponent', () => {
  let component: ModuloGestaoHumorComponent;
  let fixture: ComponentFixture<ModuloGestaoHumorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloGestaoHumorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloGestaoHumorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
