import { Component } from '@angular/core';
import { ElectronService } from './providers/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  languageSelected = 'ESP';
  menuOptionSelected = 'Home';

  languages = [
    { value: 'ESP', viewValue: 'Español' },
    { value: 'ENG', viewValue: 'English' },
    { value: 'DEU', viewValue: 'Deutsch' },
    { value: 'FRA', viewValue: 'Française' },
    { value: 'JAP', viewValue: '日本語' }
  ];
  options = [
    { value: 'Home', viewValue: 'Inicio' },
    { value: 'Channels', viewValue: 'Gráfico de Canales' },
    { value: 'OtroR', viewValue: 'Gráfico de tiempo' },
    { value: 'OtroR2', viewValue: 'Puntuación de canales' },
    { value: 'ListAP', viewValue: ' Lista de AP' },
    { value: 'OtroR4', viewValue: 'Medidor de Señal' }
  ];

  constructor(public electronService: ElectronService) {
    if (electronService.isElectron()) {
      console.log('Mode electron');
      // Check if electron is correctly injected (see externals in webpack.config.js)
      console.log('c', electronService.ipcRenderer);
      // Check if nodeJs childProcess is correctly injected (see externals in webpack.config.js)
      console.log('c', electronService.childProcess);
    } else {
      console.log('Mode web');
    }
  }
}
