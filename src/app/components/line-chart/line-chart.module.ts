import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { LineChartComponent } from './line-chart.component';
import { Routes, RouterModule } from '@angular/router';
import 'd3';
import 'nvd3';
import { NvD3Module } from 'ng2-nvd3';
import { CommonModule } from '@angular/common';


const lineChartRoute: Routes = [
  {
      path: '',
      component: LineChartComponent,
  }
]

@NgModule({
  declarations: [
    LineChartComponent
  ],
  exports: [
    LineChartComponent
  ],
  imports: [
    NvD3Module,
    RouterModule.forChild(lineChartRoute),
    MaterialModule,
    CommonModule
  ]
})
export class LineChartModule { }
