import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialRegisterComponent } from './credential-register.component';

describe('CredentialRegisterComponent', () => {
  let component: CredentialRegisterComponent;
  let fixture: ComponentFixture<CredentialRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredentialRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentialRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
