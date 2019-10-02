import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountHomeComponent } from './account-home/account-home.component';


const routes: Routes = [
  {
    path: '', component: AccountHomeComponent, children: [
      { path: '', redirectTo: 'settings', pathMatch: 'full' },
      { path: 'settings', loadChildren: () => import('../settings/pages/account-settings-pages.module').then(m => m.AccountSettingsPagesModule) },
      { path: 'notifications', loadChildren: () => import('../notification/pages/notification-pages.module').then(m => m.NotificationPagesModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountPagesRoutingModule { }
