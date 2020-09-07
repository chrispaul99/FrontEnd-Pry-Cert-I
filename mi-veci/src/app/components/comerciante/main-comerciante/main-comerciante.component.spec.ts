import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComercianteComponent } from './main-comerciante.component';

describe('MainComercianteComponent', () => {
  let component: MainComercianteComponent;
  let fixture: ComponentFixture<MainComercianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComercianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComercianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
