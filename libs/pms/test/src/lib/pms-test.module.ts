import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmsTestRoutingModule } from './pms-test-routing.module';
import { PmsTestComponent } from './pms-test.component';

@NgModule({
  imports: [
    CommonModule,
    PmsTestRoutingModule,
  ],
  declarations: [PmsTestComponent]
})
export class PmsTestModule {}
