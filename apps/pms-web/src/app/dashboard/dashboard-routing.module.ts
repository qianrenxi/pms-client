import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { MonitorComponent } from './monitor/monitor.component';
import { WorkplaceComponent } from './workplace/workplace.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    { path: '', redirectTo: 'v1', pathMatch: 'full' },
    { path: 'v1', component: WelcomeComponent },
    { path: 'analysis', component: AnalysisComponent },
    { path: 'monitor', component: MonitorComponent },
    { path: 'workplace', component: WorkplaceComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
