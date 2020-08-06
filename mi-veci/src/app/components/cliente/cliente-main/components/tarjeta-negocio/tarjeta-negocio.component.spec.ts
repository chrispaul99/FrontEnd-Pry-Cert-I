import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaNegocioComponent } from './tarjeta-negocio.component';

describe('TarjetaNegocioComponent', () => {
  let component: TarjetaNegocioComponent;
  let fixture: ComponentFixture<TarjetaNegocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaNegocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
