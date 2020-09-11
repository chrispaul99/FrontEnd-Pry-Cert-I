import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaHorizontalComponent } from './grafica-horizontal.component';

describe('GraficaHorizontalComponent', () => {
  let component: GraficaHorizontalComponent;
  let fixture: ComponentFixture<GraficaHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
