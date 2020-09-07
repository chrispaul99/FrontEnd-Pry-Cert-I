import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilComercianteComponent } from './perfil-comerciante.component';

describe('PerfilComercianteComponent', () => {
  let component: PerfilComercianteComponent;
  let fixture: ComponentFixture<PerfilComercianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilComercianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilComercianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
