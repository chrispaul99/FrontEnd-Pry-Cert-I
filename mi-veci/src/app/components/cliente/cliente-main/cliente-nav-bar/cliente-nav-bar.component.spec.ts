import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteNavBarComponent } from './cliente-nav-bar.component';

describe('ClienteNavBarComponent', () => {
  let component: ClienteNavBarComponent;
  let fixture: ComponentFixture<ClienteNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
