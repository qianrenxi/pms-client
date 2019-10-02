import { NgModule } from '@angular/core';

import { SharedModule } from '@qianrenxi/pms/shared';

import { AccountSettingsPagesRoutingModule } from './account-settings-pages-routing.module';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { SecureComponent } from './secure/secure.component';
import { PreferenceComponent } from './preference/preference.component';
import { AuthorizationComponent } from './authorization/authorization.component';


@NgModule({
  imports: [
    SharedModule,
    AccountSettingsPagesRoutingModule
  ],
  declarations: [
    MainComponent,
    ProfileComponent,
    SecureComponent,
    PreferenceComponent,
    AuthorizationComponent,
  ],
})
export class AccountSettingsPagesModule { }
