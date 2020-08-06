import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaVerSigComponent } from './tarjeta-ver-sig.component';

describe('TarjetaVerSigComponent', () => {
  let component: TarjetaVerSigComponent;
  let fixture: ComponentFixture<TarjetaVerSigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaVerSigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaVerSigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
