
import { Component, OnInit } from '@angular/core';

import { WifiService } from './../../providers/wifi.service';
import { Network } from './../../interfaces/network';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  returnNetworks: Network[];
  constructor(public wifi: WifiService) { }
  ngOnInit() {
    this.scanNetworks();
  }
  scanNetworks() {
    this.wifi.initWifi().then(init => {
      if (init) {
        this.wifi.scanNetworks().then(a => {
          if (a != null) {
            a.map(l => console.log(l));
            this.returnNetworks = a;
          }
        })
      }
    });
  }
}
