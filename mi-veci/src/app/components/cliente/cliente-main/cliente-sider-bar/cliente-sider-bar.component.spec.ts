import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteSiderBarComponent } from './cliente-sider-bar.component';

describe('ClienteSiderBarComponent', () => {
  let component: ClienteSiderBarComponent;
  let fixture: ComponentFixture<ClienteSiderBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteSiderBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteSiderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
