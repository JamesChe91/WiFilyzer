import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    MaterialModule,
  ]
})
export class HomeModule { }
