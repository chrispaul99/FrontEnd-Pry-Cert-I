import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyNegocioComponent } from './only-negocio.component';

describe('OnlyNegocioComponent', () => {
  let component: OnlyNegocioComponent;
  let fixture: ComponentFixture<OnlyNegocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlyNegocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
