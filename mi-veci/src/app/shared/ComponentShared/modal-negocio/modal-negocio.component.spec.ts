import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNegocioComponent } from './modal-negocio.component';

describe('ModalNegocioComponent', () => {
  let component: ModalNegocioComponent;
  let fixture: ComponentFixture<ModalNegocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNegocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
