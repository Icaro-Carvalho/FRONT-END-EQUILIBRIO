import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloDashboardHumorComponent } from './modulo-dashboard-humor.component';

describe('ModuloDashboardHumorComponent', () => {
  let component: ModuloDashboardHumorComponent;
  let fixture: ComponentFixture<ModuloDashboardHumorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloDashboardHumorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloDashboardHumorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
