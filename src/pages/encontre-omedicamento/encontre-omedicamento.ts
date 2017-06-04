import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LeituraDeReceitasPage } from '../leitura-de-receitas/leitura-de-receitas';
import {  } from '../encontre-omedicamento4/encontre-omedicamento4';
import {  } from '../encontre-omedicamento5/encontre-omedicamento5';
import { EncontreOMedicamento4Page } from '../encontre-omedicamento4/encontre-omedicamento4';
import { EncontreOMedicamento5Page } from '../encontre-omedicamento5/encontre-omedicamento5';
import { EncontreOMedicamento2Page } from '../encontre-omedicamento2/encontre-omedicamento2';

@Component({
  selector: 'page-encontre-omedicamento',
  templateUrl: 'encontre-omedicamento.html'
})
export class EncontreOMedicamentoPage {

  constructor(public navCtrl: NavController) {
  }
  goToLeituraDeReceitas(params){
    if (!params) params = {};
    this.navCtrl.push(LeituraDeReceitasPage);
  }goToEncontreOMedicamento4(params){
    if (!params) params = {};
    this.navCtrl.push(EncontreOMedicamento4Page);
  }goToEncontreOMedicamento5(params){
    if (!params) params = {};
    this.navCtrl.push(EncontreOMedicamento5Page);
  }goToEncontreOMedicamento2(params){
    if (!params) params = {};
    this.navCtrl.push(EncontreOMedicamento2Page);
  }
}
