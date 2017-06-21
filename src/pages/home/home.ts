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
  tabs: any;
  err: string;
  email: string;
  password: string;
  constructor(public navCtrl: NavController, public authservice:authService , private storage: Storage) {
    this.tabs = document.querySelector(".tabs .tabbar"); 
    this.loggedIn = false;
    this.storage.set('loggedIn',false);
    this.err = '';
  }

  login(){
      this.authservice.authAPI(this.email,this.password)
      .subscribe((res) => {
        if(res.Rcode === 200){
          this.storage.set('token',res.User.token);
          this.storage.set('loggedIn',true);
          this.loggedIn = true;
          this.navCtrl.push(MainPage);
        }else {
          console.log(res.Message);
          this.err = res.Message + ', please check your login credentials.';
        }
      });
  }

  ionViewWillEnter(){
    //console.log(this.tabs);
    //this.tabs.style.display = 'none';
  }

  ionViewWillLeave(){
    //this.tabs.style.display = 'flex';
  }

}
