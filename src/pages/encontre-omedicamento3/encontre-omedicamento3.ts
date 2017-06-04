import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EncontreOMedicamento4Page } from '../encontre-omedicamento4/encontre-omedicamento4';
import { EncontreOMedicamento5Page } from '../encontre-omedicamento5/encontre-omedicamento5';
import { FarmCiasPopularesPage } from '../farm-cias-populares/farm-cias-populares';

@Component({
  selector: 'page-encontre-omedicamento3',
  templateUrl: 'encontre-omedicamento3.html'
})
export class EncontreOMedicamento3Page {

  constructor(public navCtrl: NavController) {
  }
  goToEncontreOMedicamento4(params){
    if (!params) params = {};
    this.navCtrl.push(EncontreOMedicamento4Page);
  }goToEncontreOMedicamento5(params){
    if (!params) params = {};
    this.navCtrl.push(EncontreOMedicamento5Page);
  }goToFarmCiasPopulares(params){
    if (!params) params = {};
    this.navCtrl.push(FarmCiasPopularesPage);
  }
}
