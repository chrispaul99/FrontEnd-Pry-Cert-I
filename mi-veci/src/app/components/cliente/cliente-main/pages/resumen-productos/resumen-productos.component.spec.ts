import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenProductosComponent } from './resumen-productos.component';

describe('ResumenProductosComponent', () => {
  let component: ResumenProductosComponent;
  let fixture: ComponentFixture<ResumenProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
