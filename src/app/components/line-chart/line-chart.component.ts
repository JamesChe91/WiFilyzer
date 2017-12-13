import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WifiService } from './../../providers/wifi.service';
import { Network } from './../../interfaces/network';
declare let d3: any;

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss', '../../../../node_modules/nvd3/build/nv.d3.css'],
  encapsulation: ViewEncapsulation.None
})
export class LineChartComponent implements OnInit {
  options;
  data;
  chartType;
  dBmMin: number;
  dBmMax: number;
  chMin: number;
  chMax: number;
  constructor(public wifi: WifiService) { }

  ngOnInit() {
    this.options = {
      chart: {
        type: 'lineChart',
        height: 450,
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 55
        },
        x: function (d) { return d.x; },
        y: function (d) { return d.y; },
        useInteractiveGuideline: true,
        xAxis: {
          axisLabel: 'Channels'
        },
        yAxis: {
          axisLabel: 'Signal (dBm)'
        }
      }
    };
    this.data = this.lineChartData();
  }
  generateSingleArray(wifi: Network) {
    const data = [];
    return [
      {
        values: [{ x: wifi.channel, y: wifi.signal_level }],
        key: wifi.ssid,
        color: this.getRandomColor()
      }
    ];
  }
  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  lineChartData() {
    const allData = [];
    this.wifi.initWifi().then(init => {
      if (init) {
        this.wifi.scanNetworks().then(a => {
          if (a != null) {
            // this.dBmMin = Math.min.apply(Math, a.map(function (o) { return Math.abs(o.signal_level); }));
            // this.dBmMax = Math.max.apply(Math, a.map(function (o) { return Math.abs(o.signal_level); }));
            // this.chMin = Math.min.apply(Math, a.map(function (o) { return o.channel; }));
            // this.chMax = Math.max.apply(Math, a.map(function (o) { return o.channel; }));

            a.map(l => { allData.push(this.generateSingleArray(l)[0]); });
            console.log(JSON.stringify(allData));
            return allData;
          }
        })
      }
    });
  }

}
