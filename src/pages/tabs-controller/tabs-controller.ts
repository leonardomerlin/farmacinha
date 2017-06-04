import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LeituraDeReceitasPage } from '../leitura-de-receitas/leitura-de-receitas';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = LeituraDeReceitasPage;
  constructor(public navCtrl: NavController) {
  }
  
}
