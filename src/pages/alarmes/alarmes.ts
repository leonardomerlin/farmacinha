import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlarmePage } from '../alarme/alarme';

@Component({
  selector: 'page-alarmes',
  templateUrl: 'alarmes.html'
})
export class AlarmesPage {

  constructor(public navCtrl: NavController) {
  }
  goToAlarme(params){
    if (!params) params = {};
    this.navCtrl.push(AlarmePage);
  }
}
