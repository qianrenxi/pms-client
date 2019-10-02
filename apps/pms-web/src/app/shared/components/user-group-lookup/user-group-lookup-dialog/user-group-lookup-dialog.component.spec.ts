import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupLookupDialogComponent } from './user-group-lookup-dialog.component';

describe('UserGroupLookupDialogComponent', () => {
  let component: UserGroupLookupDialogComponent;
  let fixture: ComponentFixture<UserGroupLookupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGroupLookupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupLookupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
