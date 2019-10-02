import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuardService } from './core';
import { LayoutDefaultComponent } from './layout';

const routes: Routes = [
  {
    path: '', canActivate: [AuthenticationGuardService], component: LayoutDefaultComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      // { path: '', loadChildren: () => import('.').then(m => m) },
      
      // acount
      { path: 'account', loadChildren: () => import('./account/pages/account-pages.module').then(m => m.AccountPagesModule) },

      // exception
      { path: 'exception', loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule) },
    ]
  },

  // exception
  { path: 'exception', loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule) },

  // passport
  { path: '', loadChildren: () => import('./account/passport/passport.module').then(m => m.PassportModule) },
  // { path: '', loadChildren: () => import('.').then(m => m) },

  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}