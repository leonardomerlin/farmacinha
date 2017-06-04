import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EncontreOMedicamento5Page } from '../encontre-omedicamento5/encontre-omedicamento5';

@Component({
  selector: 'page-encontre-omedicamento4',
  templateUrl: 'encontre-omedicamento4.html'
})
export class EncontreOMedicamento4Page {
  selectedSegment = 'por-principio-ativo';

  constructor(public navCtrl: NavController) {
  }

  goToEncontreOMedicamento4(params) {
    if (!params) params = {};
    this.navCtrl.push(EncontreOMedicamento4Page);
  }
  goToEncontreOMedicamento5(params) {
    if (!params) params = {};
    this.navCtrl.push(EncontreOMedicamento5Page);
  }
}
