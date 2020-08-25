import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderbarClienteComponent } from './siderbar-cliente.component';

describe('SiderbarClienteComponent', () => {
  let component: SiderbarClienteComponent;
  let fixture: ComponentFixture<SiderbarClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiderbarClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiderbarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
