import { Injectable } from '@angular/core';

import { ElectronService } from './electron.service';
import { Network } from './../interfaces/network';

@Injectable()
export class WifiService {
  wifiObject: any;
  returnNetworks;
  constructor(public electronService: ElectronService) { }

  initWifi(): any {
    return new Promise((res, rej) => {
      this.wifiObject = this.electronService.getWifi();
      this.wifiObject.init({
        iface: null // network interface, choose a random wifi interface if set to null
      });
      res(true);
    });
  }
  scanNetworks() {
    return new Promise<Network[]>((res, rej) => {
      this.wifiObject.scan((err, currentNetworks) => {
        if (err) {
          console.log(err);
          res(null);
        } else {
          res(currentNetworks.map(it => {
            return <Network>JSON.parse(JSON.stringify(it))
          }));
        }
      });
    });

  }
}
