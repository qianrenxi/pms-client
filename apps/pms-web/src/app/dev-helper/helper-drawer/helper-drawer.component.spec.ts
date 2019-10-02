import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperDrawerComponent } from './helper-drawer.component';

describe('HelperDrawerComponent', () => {
  let component: HelperDrawerComponent;
  let fixture: ComponentFixture<HelperDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelperDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
