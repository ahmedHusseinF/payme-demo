import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { MainPage } from '../main/main';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MainPage;
  tab3Root = SettingsPage;
  tab4Root = AboutPage;
  constructor(public viewCtrl: ViewController) {

  }
}
