import { Injectable } from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer } from 'electron';
import * as wifiModule from 'node-wifi';
import * as childProcess from 'child_process';
import * as osModule from 'os';
@Injectable()
export class ElectronService {

  ipcRenderer: typeof ipcRenderer;
  childProcess: typeof childProcess;
  wifiModule: typeof wifiModule;
  osModule: typeof osModule;

  constructor() {
    // Conditional imports
    if (this.isElectron()) {
      this.ipcRenderer = window.require('electron').ipcRenderer;
      this.childProcess = window.require('child_process');
      this.wifiModule = require('node-wifi');
      this.osModule = require('os');
    }
  }

  isElectron = () => {
    return window && window.process && window.process.type;
  }
  getWifi = () => {
    if (this.isElectron()) {
      return this.wifiModule;
    }
  }

  getNetworkInterfaces = () => {
    if (this.isElectron()) {
      return this.osModule.networkInterfaces();
    }
  }
}
