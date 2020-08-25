import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainClienteComponent } from './main-cliente.component';

describe('MainClienteComponent', () => {
  let component: MainClienteComponent;
  let fixture: ComponentFixture<MainClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
