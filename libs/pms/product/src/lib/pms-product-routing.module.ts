import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PmsProductComponent } from './pms-product.component';


const routes: Routes = [
    { path: '', component: PmsProductComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PmsProductRoutingModule {
}