import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFrameworkProductComponent } from './view-framework-product/view-framework-product.component';
import { SharedModule } from '@qimooc/console/shared';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    SharedModule,
    RouterModule,
  ],
  declarations: [ViewFrameworkProductComponent],
  exports: [ViewFrameworkProductComponent]
})
export class ViewFrameworkProductModule { }
