import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmsProductRoutingModule } from './pms-product-routing.module';
import { PmsProductComponent } from './pms-product.component';

@NgModule({
  imports: [
    CommonModule,
    PmsProductRoutingModule,
  ],
  declarations: [PmsProductComponent]
})
export class PmsProductModule {}
