import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { MenuPage } from '../pages/menu/menu';
import { ContactPage } from '../pages/contact/contact';
import { DishdetailPage } from '../pages/dishdetail/dishdetail';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DishProvider } from '../providers/dish/dish';
import { LeaderProvider } from '../providers/leader/leader';
import { PromotionProvider } from '../providers/promotion/promotion';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';
import { HttpModule } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { FavoriteProvider } from '../providers/favorite/favorite';
import {FavoritesPage} from '../pages/favorites/favorites';
import {ReservationPage} from '../pages/reservation/reservation';
import {CommentPage} from '../pages/comment/comment';
import {LoginPage} from '../pages/login/login';
import { IonicStorageModule } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { EmailComposer } from '@ionic-native/email-composer';
import { SocialSharing } from '@ionic-native/social-sharing';
import { RegisterPage } from '../pages/register/register';
import {Camera} from '@ionic-native/camera';
import{Network} from '@ionic-native/network';
import { CallNumber } from '@ionic-native/call-number';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    MenuPage,
    ContactPage, RegisterPage, DishdetailPage, FavoritesPage, ReservationPage, CommentPage, LoginPage
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    AboutPage, RegisterPage,
    MenuPage,
    ContactPage, DishdetailPage, FavoritesPage, ReservationPage, CommentPage, LoginPage
  ],
  providers: [{ provide: 'BaseURL', useValue: baseURL },
    StatusBar, Camera, Network,
    EmailComposer,
    SplashScreen, SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DishProvider,
    LeaderProvider,
    PromotionProvider, LocalNotifications,
    ProcessHttpmsgProvider,
    FavoriteProvider, CallNumber
  ]
})
export class AppModule {}