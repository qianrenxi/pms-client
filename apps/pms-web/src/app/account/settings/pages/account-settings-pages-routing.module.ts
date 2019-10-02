import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PreferenceComponent } from './preference/preference.component';
import { SecureComponent } from './secure/secure.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent },
      { path: 'preference', component: PreferenceComponent },
      { path: 'secure', component: SecureComponent },
      { path: 'authorization', component: AuthorizationComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountSettingsPagesRoutingModule { }
