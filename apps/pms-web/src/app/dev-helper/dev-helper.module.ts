import { NgModule } from '@angular/core';

import { SharedModule } from '@qianrenxi/pms/shared';

import { DevHelperService } from './dev-helper.service';

import { DevHelperOutletDirective } from './dev-helper-outlet.directive';
import { HelperDrawerComponent } from './helper-drawer/helper-drawer.component';
import { HelperHandlerComponent } from './helper-handler/helper-handler.component';



@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    DevHelperOutletDirective,
    HelperDrawerComponent,
    HelperHandlerComponent,
  ],
  entryComponents: [
    HelperDrawerComponent,
    HelperHandlerComponent,
  ],
  providers: [
    DevHelperService
  ],
  exports: [DevHelperOutletDirective]
})
export class DevHelperModule { }
