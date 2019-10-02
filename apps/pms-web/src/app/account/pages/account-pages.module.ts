import { NgModule } from '@angular/core';

import { SharedModule } from '@qianrenxi/pms/shared';

import { AccountPagesRoutingModule } from './account-pages-routing.module';
import { AccountHomeComponent } from './account-home/account-home.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';


@NgModule({
  imports: [
    SharedModule,
    AccountPagesRoutingModule
  ],
  declarations: [
    AccountHomeComponent,
    AccountSummaryComponent
  ],
})
export class AccountPagesModule { }
