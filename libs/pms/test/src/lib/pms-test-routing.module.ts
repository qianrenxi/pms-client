import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PmsTestComponent } from './pms-test.component';

const routes: Routes = [
    { path: '', component: PmsTestComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PmsTestRoutingModule {
}