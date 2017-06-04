import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { EncontreOMedicamentoPage } from '../../pages/encontre-omedicamento/encontre-omedicamento';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  email = 'eu-amo@minhafarmacinha.com.br';
  senha = '1234';

  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController) {
  }

  openHome() {
    let loading = this.loadingCtrl.create({
      content: 'Autenticando...',
      duration: 1000
    });
    loading.present();

    loading.onDidDismiss(() => {
      this.navCtrl.setRoot(EncontreOMedicamentoPage);
    });
  }

  openSignup() {
    // this.navCtrl.setRoot('SignupPage');
  }
}
