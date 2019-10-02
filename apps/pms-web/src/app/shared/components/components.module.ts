import { NgModule } from '@angular/core';

import { HelpDialogModule } from './help-dialog';
import { UserGroupLookupModule } from './user-group-lookup';
import { UserLookupModule } from './user-lookup';

@NgModule({
  exports: [
    HelpDialogModule,
    UserGroupLookupModule,
    UserLookupModule,
  ]
})
export class ConsoleSharedComponentsModule { }
