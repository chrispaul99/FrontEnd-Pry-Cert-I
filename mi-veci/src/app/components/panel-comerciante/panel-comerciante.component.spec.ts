import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelComercianteComponent } from './panel-comerciante.component';

describe('PanelComercianteComponent', () => {
  let component: PanelComercianteComponent;
  let fixture: ComponentFixture<PanelComercianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelComercianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelComercianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
