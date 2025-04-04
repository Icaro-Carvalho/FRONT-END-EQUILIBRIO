import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloTop3Component } from './modulo-top3.component';

describe('ModuloTop3Component', () => {
  let component: ModuloTop3Component;
  let fixture: ComponentFixture<ModuloTop3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloTop3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloTop3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
