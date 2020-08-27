import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNegociosComponent } from './main-negocios.component';

describe('MainNegociosComponent', () => {
  let component: MainNegociosComponent;
  let fixture: ComponentFixture<MainNegociosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNegociosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNegociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
