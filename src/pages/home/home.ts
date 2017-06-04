import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from './../login/login';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  slides: any[];

  constructor(public navCtrl: NavController, private storage: Storage) {

  }

  goLogin() {
    this.storage.set('skip-intro', true);
    this.navCtrl.setRoot(LoginPage);
  }
}
