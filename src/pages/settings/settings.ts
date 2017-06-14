import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
    theme: string;
    constructor(public navCtrl: NavController) {
        this.theme = 'danger';
    }
    
    changeSettings(){
        localStorage.setItem('theme', this.theme)
    }
}