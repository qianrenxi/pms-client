import { NgModule } from '@angular/core';

import { SharedModule } from '@qimooc/console/shared';

import { NotificationPagesRoutingModule } from './notification-pages-routing.module';
import { MainComponent } from './main/main.component';


@NgModule({
  imports: [
    SharedModule,
    NotificationPagesRoutingModule
  ],
  declarations: [
    MainComponent,
  ],
})
export class NotificationPagesModule { }
