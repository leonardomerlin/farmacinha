import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { LeituraDeReceitasPage } from '../leitura-de-receitas/leitura-de-receitas';
// import { EncontreOMedicamento2Page } from '../encontre-omedicamento2/encontre-omedicamento2';

@Component({
  selector: 'page-encontre-omedicamento',
  templateUrl: 'encontre-omedicamento.html'
})
export class EncontreOMedicamentoPage {

  query = '';
  resultList = null;
  selectedSegment: any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public http: Http) {
    this.selectedSegment = 'por-principio-ativo';
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
      this.getData().subscribe((data) => {
        this.resultList = data;
      })
      // this.navCtrl.push(EncontreOMedicamento2Page, params);
    });
  }

  goToDetails(item) {
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  getData() {
    return this.http.get('assets/data/remedions.json');
  }
}
