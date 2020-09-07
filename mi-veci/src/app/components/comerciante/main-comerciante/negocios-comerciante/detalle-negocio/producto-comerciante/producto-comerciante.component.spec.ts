import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoComercianteComponent } from './producto-comerciante.component';

describe('ProductoComercianteComponent', () => {
  let component: ProductoComercianteComponent;
  let fixture: ComponentFixture<ProductoComercianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoComercianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoComercianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
