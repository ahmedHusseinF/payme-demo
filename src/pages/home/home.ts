import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { authService } from '../../app/services/auth.service';
import { MainPage } from '../main/main';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loggedIn: boolean;
  email: string;
  password: string;
  constructor(public navCtrl: NavController, private authservice:authService , private storage: Storage) {
    this.loggedIn = false;
  }

  login(){
      this.authservice.authAPI(this.email,this.password)
      .subscribe(res => {
        console.log(res);
        //this.storage.set('token',res.token);
        this.loggedIn = true;
        //this.navCtrl.push(MainPage);
      });
  }

}
