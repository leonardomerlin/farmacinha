import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CaixaDeRemDiosPage } from '../pages/caixa-de-rem-dios/caixa-de-rem-dios';
import { CaixaDeRemDioPage } from '../pages/caixa-de-rem-dio/caixa-de-rem-dio';
import { EncontreOMedicamentoPage } from '../pages/encontre-omedicamento/encontre-omedicamento';
import { LeituraDeReceitasPage } from '../pages/leitura-de-receitas/leitura-de-receitas';
import { EncontreOMedicamento4Page } from '../pages/encontre-omedicamento4/encontre-omedicamento4';
import { EncontreOMedicamento5Page } from '../pages/encontre-omedicamento5/encontre-omedicamento5';
import { EncontreOMedicamento2Page } from '../pages/encontre-omedicamento2/encontre-omedicamento2';
import { AlarmesPage } from '../pages/alarmes/alarmes';
import { AlarmePage } from '../pages/alarme/alarme';


import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToCaixaDeRemDios(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CaixaDeRemDiosPage);
  }goToCaixaDeRemDio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CaixaDeRemDioPage);
  }goToEncontreOMedicamento(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EncontreOMedicamentoPage);
  }goToLeituraDeReceitas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LeituraDeReceitasPage);
  }goToEncontreOMedicamento4(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EncontreOMedicamento4Page);
  }goToEncontreOMedicamento5(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EncontreOMedicamento5Page);
  }goToEncontreOMedicamento2(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EncontreOMedicamento2Page);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }goToAlarmes(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AlarmesPage);
  }goToAlarme(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AlarmePage);
  }
}
