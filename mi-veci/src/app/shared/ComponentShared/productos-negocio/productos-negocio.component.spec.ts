import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosNegocioComponent } from './productos-negocio.component';

describe('ProductosNegocioComponent', () => {
  let component: ProductosNegocioComponent;
  let fixture: ComponentFixture<ProductosNegocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosNegocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
