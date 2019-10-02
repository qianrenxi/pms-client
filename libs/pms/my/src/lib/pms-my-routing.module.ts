import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PmsMyComponent } from './pms-my.component';


const routes: Routes = [
    { path: '', component: PmsMyComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PmsMyRoutingModule {
}