import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LeituraDeReceitasPage } from '../pages/leitura-de-receitas/leitura-de-receitas';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { EncontreOMedicamentoPage } from '../pages/encontre-omedicamento/encontre-omedicamento';
import { EncontreOMedicamento2Page } from '../pages/encontre-omedicamento2/encontre-omedicamento2';
import { EncontreOMedicamento3Page } from '../pages/encontre-omedicamento3/encontre-omedicamento3';
import { EncontreOMedicamento4Page } from '../pages/encontre-omedicamento4/encontre-omedicamento4';
import { EncontreOMedicamento5Page } from '../pages/encontre-omedicamento5/encontre-omedicamento5';
import { CaixaDeRemDiosPage } from '../pages/caixa-de-rem-dios/caixa-de-rem-dios';
import { AlarmesPage } from '../pages/alarmes/alarmes';
import { AlarmePage } from '../pages/alarme/alarme';
import { CaixaDeRemDioPage } from '../pages/caixa-de-rem-dio/caixa-de-rem-dio';
import { FarmCiasPopularesPage } from '../pages/farm-cias-populares/farm-cias-populares';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    LeituraDeReceitasPage,
    TabsControllerPage,
    HomePage,
    LoginPage,
    EncontreOMedicamentoPage,
    EncontreOMedicamento2Page,
    EncontreOMedicamento3Page,
    EncontreOMedicamento4Page,
    EncontreOMedicamento5Page,
    CaixaDeRemDiosPage,
    AlarmesPage,
    AlarmePage,
    CaixaDeRemDioPage,
    FarmCiasPopularesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LeituraDeReceitasPage,
    TabsControllerPage,
    HomePage,
    LoginPage,
    EncontreOMedicamentoPage,
    EncontreOMedicamento2Page,
    EncontreOMedicamento3Page,
    EncontreOMedicamento4Page,
    EncontreOMedicamento5Page,
    CaixaDeRemDiosPage,
    AlarmesPage,
    AlarmePage,
    CaixaDeRemDioPage,
    FarmCiasPopularesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
