import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { LeituraDeReceitasPage } from '../leitura-de-receitas/leitura-de-receitas';
import { EncontreOMedicamento2Page } from '../encontre-omedicamento2/encontre-omedicamento2';

@Component({
  selector: 'page-encontre-omedicamento',
  templateUrl: 'encontre-omedicamento.html'
})
export class EncontreOMedicamentoPage {

  query = '';
  resultList = null;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  }

  goToLeituraDeReceitas(params) {
    if (!params) params = {};
    this.navCtrl.push(LeituraDeReceitasPage, params);
  }

  goToResultados(params) {
    if (!params) params = {};

    console.log('Loading');
    let loading = this.loadingCtrl.create({
      content: 'Procurando. Aguarde...',
      duration: 1000
    });

    loading.present();

    loading.onDidDismiss(() => {
      this.resultList = [{
        name: 'teste'
      }];
      // this.navCtrl.push(EncontreOMedicamento2Page, params);
    });
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
