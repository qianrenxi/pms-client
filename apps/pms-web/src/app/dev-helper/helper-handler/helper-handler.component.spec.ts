import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperHandlerComponent } from './helper-handler.component';

describe('HelperHandlerComponent', () => {
  let component: HelperHandlerComponent;
  let fixture: ComponentFixture<HelperHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelperHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
