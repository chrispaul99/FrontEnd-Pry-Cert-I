import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegocioCardComponent } from './negocio-card.component';

describe('NegocioCardComponent', () => {
  let component: NegocioCardComponent;
  let fixture: ComponentFixture<NegocioCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegocioCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegocioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
