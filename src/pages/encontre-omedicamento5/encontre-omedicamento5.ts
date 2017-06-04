import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EncontreOMedicamento4Page } from '../encontre-omedicamento4/encontre-omedicamento4';

@Component({
  selector: 'page-encontre-omedicamento5',
  templateUrl: 'encontre-omedicamento5.html'
})
export class EncontreOMedicamento5Page {

  constructor(public navCtrl: NavController) {
  }
  goToEncontreOMedicamento4(params){
    if (!params) params = {};
    this.navCtrl.push(EncontreOMedicamento4Page);
  }goToEncontreOMedicamento5(params){
    if (!params) params = {};
    this.navCtrl.push(EncontreOMedicamento5Page);
  }
}
