import { NgModule } from '@angular/core';
import { SharedImportsModule } from '../shared-imports.module';

import { UserLookupComponent } from './user-lookup/user-lookup.component';
import { UserLookupDialogComponent } from './user-lookup-dialog/user-lookup-dialog.component';
import { UserLookupFastComponent } from './user-lookup-dialog/user-lookup-fast/user-lookup-fast.component';
import { UserLookupFindComponent } from './user-lookup-dialog/user-lookup-find/user-lookup-find.component';
import { UserInputComponent } from './user-input/user-input.component';



@NgModule({
  imports: [
    SharedImportsModule,
  ],
  declarations: [
    UserLookupComponent,
    UserLookupDialogComponent,
    UserLookupFastComponent,
    UserLookupFindComponent,
    UserInputComponent,
  ],
  exports: [
    UserLookupComponent,
    UserInputComponent,
  ],
  entryComponents: [UserLookupDialogComponent]
})
export class UserLookupModule { }
