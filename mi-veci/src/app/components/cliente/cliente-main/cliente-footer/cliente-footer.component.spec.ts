import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFooterComponent } from './cliente-footer.component';

describe('ClienteFooterComponent', () => {
  let component: ClienteFooterComponent;
  let fixture: ComponentFixture<ClienteFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
