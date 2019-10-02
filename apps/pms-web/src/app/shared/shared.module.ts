import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgMolainCommonModule } from '@ng-molain/common';
import { NgMolainComponentsModule } from '@ng-molain/components';
import { G2ChartsModule } from '@ng-molain/g2-charts';
import { ConsoleSharedComponentsModule } from './components';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    NgMolainCommonModule,
    NgMolainComponentsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    NgMolainCommonModule,
    NgMolainComponentsModule,
    G2ChartsModule,
    ConsoleSharedComponentsModule,
  ]
})
export class SharedModule { }
