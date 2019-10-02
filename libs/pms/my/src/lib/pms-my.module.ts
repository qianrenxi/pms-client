import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmsMyRoutingModule } from './pms-my-routing.module';
import { PmsMyComponent } from './pms-my.component';

@NgModule({
  imports: [
    CommonModule,
    PmsMyRoutingModule,
  ],
  declarations: [PmsMyComponent]
})
export class PmsMyModule {}
