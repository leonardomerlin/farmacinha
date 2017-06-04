import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CaixaDeRemDioPage } from '../caixa-de-rem-dio/caixa-de-rem-dio';

@Component({
  selector: 'page-caixa-de-rem-dios',
  templateUrl: 'caixa-de-rem-dios.html'
})
export class CaixaDeRemDiosPage {

  constructor(public navCtrl: NavController) {
  }
  goToCaixaDeRemDio(params){
    if (!params) params = {};
    this.navCtrl.push(CaixaDeRemDioPage);
  }
}
