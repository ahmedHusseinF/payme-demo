import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, } from 'ionic-angular';
import { fetchService } from '../../app/services/fetch.service';
import { DetailsPage } from '../details/details';
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
    loggedIn: boolean;
    items: any ;
    token: string;
    location: string;
    categories: any;
  constructor(public navCtrl: NavController, private fetch: fetchService,public storage: Storage) {
    
  }

  ngOnInit(){
    this.storage.get('token').then((val)=>{
        console.log(val);
        this.token = val;
        //this.fetch.fetch(this.token).subscribe((res)=>{
            //console.log(res);
            //this.items = res.products;
           // this.findCategories();
           // console.log(this.items);
        //});
    });
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


}
