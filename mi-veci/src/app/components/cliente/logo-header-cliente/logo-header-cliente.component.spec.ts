import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoHeaderClienteComponent } from './logo-header-cliente.component';

describe('LogoHeaderClienteComponent', () => {
  let component: LogoHeaderClienteComponent;
  let fixture: ComponentFixture<LogoHeaderClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoHeaderClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoHeaderClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
