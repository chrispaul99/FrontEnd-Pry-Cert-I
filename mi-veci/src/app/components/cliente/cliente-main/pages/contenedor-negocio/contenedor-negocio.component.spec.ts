import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorNegocioComponent } from './contenedor-negocio.component';

describe('ContenedorNegocioComponent', () => {
  let component: ContenedorNegocioComponent;
  let fixture: ComponentFixture<ContenedorNegocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenedorNegocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
