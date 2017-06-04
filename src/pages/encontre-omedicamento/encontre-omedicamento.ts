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
      // this.getData().subscribe((data) => {
      //   this.resultList = data;
      // });
      this.resultList = this.getData();
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
    // return this.http.get('assets/data/remedios.json');
    return [
      {
        "id": 1,
        "name": "Tylenol",
        "active_principle": "Paracetamol",
        "description": "O TYLENOL® 750mg é indicado para o alívio temporário da dor de leve a moderada, como aquelas associadas a gripes, resfriados, artrites e cólicas, e para a redução da febre.",
        "composition": "Ingrediente Ativo: 750mg de paracetamol por comprimido. Excipientes: ácido esteárico, água purifi cada, amido pré-gelatinizado, hipromelose, macrogol e povidona.",
        "image_url": "https://www.tylenol.com.br/sites/default/files/desktop_210x210_04_2.jpg",
        "codebar": "7896212422517",
        "players": [
          {
            "id": 1,
            "name": "Nissei",
            "price": 31.23,
            "promotion": "",
            "address": "R. Visc. de Guarapuava, 2113",
            "url_site": "https://www.drogariasnissei.com.br/tylenol-750mg-20-cpr/87926-01"
          },
          {
            "id": 2,
            "name": "Droga Raia",
            "price": 25.99,
            "promotion": "Leve dois e pague 22,09",
            "address": "R. Mal. Cândido Rondon, 1894",
            "url_site": "http://www.drogaraia.com.br/tylenol-750mg-20-comprimidos.html"

          },
          {
            "id": 3,
            "name": "Farmácia Estrela",
            "price": 21.87,
            "promotion": "",
            "address": "Av. Brasil, 7528",
            "url_site": ""

          },
          {
            "id": 4,
            "name": "Farmácia Vanzin",
            "price": 26.87,
            "promotion": "",
            "address": "R. Cuiabá, 2925",
            "url_site": ""

          },
          {
            "id": 5,
            "name": "Farmácia Preço Justo",
            "price": 20.62,
            "promotion": "",
            "address": "R. Jorge Lacerda, 1232",
            "url_site": ""

          }
        ]
      },
      {
        "id": 2,
        "name": "Resfenol",
        "active_principle": "Paracetamol",
        "description": "As ações farmacológicas das substâncias que formam o produto, prestam uma cobertura sintomática ampla no tratamento de gripes e resfriados, cuja ação farmacodinâmica e segurança são perfeitamente conhecidas e bem estabelecidas. O paracetamol possui atividade analgésica e antitérmica.",
        "composition": "Cápsulas cartuchos com 20 e 200 cápsulas em blísteres e frasco de vidro com 20 cápsulas. Gotas frasco plástico com 20 mL. Solução oral frasco de vidro com 100 mL. ",
        "image_url": "http://www.kleyhertz.com.br/public/upload/product/4_THERMUS.jpg?1459778974",
        "codebar": "7896331703443",
        "players": [
          {
            "id": 1,
            "name": "Nissei",
            "price": 19.90,
            "promotion": "",
            "address": "R. Visc. de Guarapuava, 2113",
            "url_site": "https://www.drogariasnissei.com.br/resfenol-20-caps/81566-01"
          },
          {
            "id": 2,
            "name": "Droga Raia",
            "price": 24.60,
            "promotion": "",
            "address": "R. Mal. Cândido Rondon, 1894",
            "url_site": "http://www.drogaraia.com.br/resfenol-anti-gripal-20-capsulas-gelatinosas-duras.html"

          },
          {
            "id": 4,
            "name": "Farmácia Vanzin",
            "price": 26.87,
            "promotion": "",
            "address": "R. Cuiabá, 2925",
            "url_site": ""

          }
        ]
      },
      {
        "id": 3,
        "name": "CIMELIDE®",
        "active_principle": "Nimesulida 100 mg",
        "description": "CIMELIDE é indicado em todas as doenças que requerem atividade antiinflamatória, analgésica ou antipirética. No tratamento de estados flogísticos dolorosos e não-dolorosos acompanhados ou não por febre, inclusive os relacionados ao aparelho ostearticular.",
        "composition": "Cada comprimido contém:nimesulida 100 mg. Cada ml de suspensão oral gotas contém:nimesulida 50 mg",
        "image_url": "http://www.grupocimed.com.br/imagens/produtos/20170503030515.png",
        "codebar": "7896523206110",
        "players": [
          {
            "id": 1,
            "name": "Nissei",
            "price": 4.75,
            "promotion": "",
            "address": "R. Visc. de Guarapuava, 2113",
            "url_site": "https://www.drogariasnissei.com.br/cimelide-100mg-12-cpr/146-01"
          },
          {
            "id": 2,
            "name": "Droga Raia",
            "price": 11.69,
            "promotion": "Leve dois e pague 22,09",
            "address": "R. Mal. Cândido Rondon, 1894",
            "url_site": "http://www.drogaraia.com.br/cimelide-12-comprimidos.html"

          },
          {
            "id": 3,
            "name": "Farmácia Estrela",
            "price": 10.33,
            "promotion": "",
            "address": "Av. Brasil, 7528",
            "url_site": ""

          }
        ]
      },
      {
        "id": 4,
        "name": "Naldecon Dia",
        "active_principle": "Paracetamol",
        "description": "As ações farmacológicas das substâncias que formam o produto, prestam uma cobertura sintomática ampla no tratamento de gripes e resfriados, cuja ação farmacodinâmica e segurança são perfeitamente conhecidas e bem estabelecidas. O paracetamol possui atividade analgésica e antitérmica.",
        "composition": "Cada comprimido amarelo contém: 400 mg de paracetamol e 20 mg de cloridrato de fenilefrina. Cada comprimido branco contém: 400 mg de paracetamol. Ingredientes inativos: celulose microcristalina, amido pregelatinizado, corante D&C amarelonº 10, estearato de magnésio, polivinilpirrolidona, amido de milho e água purificada.",
        "image_url": "http://www.farmabemfarmacia.com.br/assets/images/produtos/700/4175.jpg",
        "codebar": "7896016805875",
        "players": [
          {
            "id": 1,
            "name": "Nissei",
            "price": 36.36,
            "promotion": "",
            "address": "R. Visc. de Guarapuava, 2113",
            "url_site": "https://www.drogariasnissei.com.br/naldecon-dia-24-comprimidos/97462-01"
          }
        ]
      }
    ];
  }
}
