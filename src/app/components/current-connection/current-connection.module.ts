import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CurrentConnectionComponent } from './current-connection.component';
import { Routes, RouterModule } from '@angular/router';

const currentConecctionRoute: Routes = [
  {
      path: '',
      component: CurrentConnectionComponent,
  }
]

@NgModule({
  declarations: [
    CurrentConnectionComponent
  ],
  exports: [
    CurrentConnectionComponent
  ],
  imports: [
    MaterialModule,
    RouterModule.forChild(currentConecctionRoute)
  ]
})
export class CurrentConnectionModule { }
