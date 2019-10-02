import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PmsProjectComponent } from './pms-project.component';

const routes: Routes = [
    { path: '', component: PmsProjectComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PmsProjectRoutingModule {
}