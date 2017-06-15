import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { NavController,LoadingController } from 'ionic-angular';
import { fetchService } from '../../app/services/fetch.service';
import { DetailsPage } from '../details/details';
import { SettingsPage } from '../settings/settings';
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
    loggedIn: boolean;
    inSearch: boolean = false;
    searched: any[];
    loading: any;
    items: any = {
      merchants: [],
      products: [],
      promotions: []
    };
    token: string;
    location: string;
    categories: any[];
  constructor(public navCtrl: NavController, private fetch: fetchService,public storage: Storage, public loadingctrl: LoadingController, private geo: Geolocation) {
    setTimeout(()=>{
      this.storage.get('loggedIn').then((val)=>{
      this.loggedIn = val;
    });
    },1000);
  }

  ionViewWillEnter(){
    if(!this.loggedIn){
      this.showLoading();
      this.loggedIn = true;
    }else{
      return;
    }
  }

  goToSettings(){
    this.navCtrl.push(SettingsPage);
  }

  private showLoading(){
    this.loading = this.loadingctrl.create({
        content: "Please wait while we are cleaning our products..."
    });
    this.loading.present();
    this.getAsyncData();
  }

  private getAsyncData(){
    setTimeout(() => {
        this.storage.get('token').then((val)=>{
            //console.log(val);
            this.token = val;
            this.fetch.fetch(this.token).subscribe((res)=>{
                //console.log(res);
                this.items = res;
                this.findCategories();
                //console.log(this.items);
            });
        });
        this.geo.getCurrentPosition().then((pos)=>{
          let lat = pos.coords.latitude;
          let long = pos.coords.longitude;
          this.fetch.getLocation(lat, long).subscribe((res)=>{
            if(res.status == "OK"){
              console.log(res);
              this.location = res.results[0].address_components[3].long_name + ", " + res.results[0].address_components[4].long_name;
            }
          });
        });
        
        this.hideLoading();
    },3000);
  }

  private hideLoading(){
    this.loading.dismiss();
  }

  findCategories(){     //complete
    this.categories = [];
    for(let item of this.items.products){
         if(this.categories.indexOf(item.category) == -1){
            this.categories.push(item.category);
         }
    }
  }

  viewProducts(cat){    //complete
    this.navCtrl.push(DetailsPage,{
      products: this.items.products,
      cat: cat
    })
  }
  
  getItems(ev){
    console.log(ev.target.value);
    if(ev.target.value == ''){
      this.inSearch = false;
    }else{
      this.inSearch = true;
      for(let product of this.items.products){
        if(product.title.include(ev.target.value)){
          this.searched.push(product);
        }
      }
      for(let merchant of this.items.merchants){
        if(merchant.name.include(ev.target.value)){
          this.searched.push(merchant);
        }
      }
    }
  }
}
