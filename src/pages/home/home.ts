import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { authService } from '../../app/services/auth.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loggedIn: boolean;
  err: string;
  email: string;
  password: string;
  constructor(public navCtrl: NavController, public authservice:authService , private storage: Storage) {
    this.loggedIn = false;
    this.err = '';
  }

  login(){
      this.authservice.authAPI(this.email,this.password)
      .subscribe((res) => {
        if(res.Rcode == 200){
          this.storage.set('token',res.User.token);
          //localStorage.setItem('token',res.User.token)
          this.loggedIn = true;
        }else {
          this.err = res.Message;
        }
      });
  }

}
