import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { authService } from '../../app/services/auth.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loggedIn: boolean;
  email: string;
  password: string;
  theme: string;
  constructor(public navCtrl: NavController, private authservice:authService) {
    this.loggedIn = false;
    
  }

  setTheme(){
    this.theme = localStorage.getItem('theme');
  }

  login(){
      this.authservice.authAPI(this.email,this.password)
      .subscribe(res => {
        console.log(res);
      });
  }

}
