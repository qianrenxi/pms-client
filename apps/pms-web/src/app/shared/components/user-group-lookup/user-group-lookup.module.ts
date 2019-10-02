import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedImportsModule } from '../shared-imports.module';

import { UserGroupLookupComponent } from './user-group-lookup/user-group-lookup.component';
import { UserGroupLookupDialogComponent } from './user-group-lookup-dialog/user-group-lookup-dialog.component';



@NgModule({
  imports: [
    CommonModule,
    SharedImportsModule,
  ],
  declarations: [
    UserGroupLookupComponent, 
    UserGroupLookupDialogComponent,
  ],
  exports: [
    UserGroupLookupComponent,
  ],
  entryComponents: [
    UserGroupLookupDialogComponent,
  ]
})
export class UserGroupLookupModule { }
