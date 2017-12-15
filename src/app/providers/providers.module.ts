import { NgModule } from '@angular/core';
import { ElectronService } from './electron.service';
import { WifiService } from './wifi.service';
import { element } from 'protractor';

@NgModule({
  providers: [
    ElectronService,
    WifiService
  ]
})
export class ProvidersModule { }
