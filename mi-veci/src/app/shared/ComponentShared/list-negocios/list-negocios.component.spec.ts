import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNegociosComponent } from './list-negocios.component';

describe('ListNegociosComponent', () => {
  let component: ListNegociosComponent;
  let fixture: ComponentFixture<ListNegociosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNegociosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNegociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
