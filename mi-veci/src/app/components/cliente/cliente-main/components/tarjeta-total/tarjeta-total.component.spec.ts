import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaTotalComponent } from './tarjeta-total.component';

describe('TarjetaTotalComponent', () => {
  let component: TarjetaTotalComponent;
  let fixture: ComponentFixture<TarjetaTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
