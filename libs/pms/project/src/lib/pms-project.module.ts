import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmsProjectRoutingModule } from './pms-project-routing.module';
import { PmsProjectComponent } from './pms-project.component';

@NgModule({
  imports: [
    CommonModule,
    PmsProjectRoutingModule,
  ],
  declarations: [PmsProjectComponent]
})
export class PmsProjectModule {}
