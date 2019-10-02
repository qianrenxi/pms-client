import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupLookupComponent } from './user-group-lookup.component';

describe('UserGroupLookupComponent', () => {
  let component: UserGroupLookupComponent;
  let fixture: ComponentFixture<UserGroupLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGroupLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
