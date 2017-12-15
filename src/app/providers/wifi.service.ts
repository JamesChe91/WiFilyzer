import { Injectable } from '@angular/core';

import { ElectronService } from './electron.service';
import { Network } from './../interfaces/network';
import { CurrentNetwork } from './../interfaces/current-network';
import { OsNetworkInterface } from './../interfaces/os-network-interface';

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
      this.wifiObject.scan()
        .then(networks => res(networks.map(item => <Network>JSON.parse(JSON.stringify(item)))))
        .catch(error => console.log(error));
    });

  }

  getCurrentConnections() {
    return new Promise<CurrentNetwork[]>((res, rej) => {
      this.wifiObject.getCurrentConnections()
        .then(CurrentNetwork => res(CurrentNetwork.map(item => <Network>JSON.parse(JSON.stringify(item)))))
        .catch(error => console.log(error));
    });
  }
  getNetworkInterfaces() {
    console.log(this.electronService.getNetworkInterfaces());
    return new Promise<OsNetworkInterface[]>((res, rej) => {
      let IPv4_Data = JSON.parse(JSON.stringify(this.electronService.getNetworkInterfaces()))["Wi-Fi"].filter(item => {
        return item.family == "IPv4";
      });
      res(IPv4_Data);
    });
  }
}
