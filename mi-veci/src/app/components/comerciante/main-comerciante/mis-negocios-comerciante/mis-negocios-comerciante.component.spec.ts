import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisNegociosComercianteComponent } from './mis-negocios-comerciante.component';

describe('MisNegociosComercianteComponent', () => {
  let component: MisNegociosComercianteComponent;
  let fixture: ComponentFixture<MisNegociosComercianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisNegociosComercianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisNegociosComercianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
