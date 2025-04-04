import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoBemEstarComponent } from './gestao-bem-estar.component';

describe('GestaoBemEstarComponent', () => {
  let component: GestaoBemEstarComponent;
  let fixture: ComponentFixture<GestaoBemEstarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoBemEstarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoBemEstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
