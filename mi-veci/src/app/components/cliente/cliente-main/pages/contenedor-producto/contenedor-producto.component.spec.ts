import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorProductoComponent } from './contenedor-producto.component';

describe('ContenedorProductoComponent', () => {
  let component: ContenedorProductoComponent;
  let fixture: ComponentFixture<ContenedorProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenedorProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
