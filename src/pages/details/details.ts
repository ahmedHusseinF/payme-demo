import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'details.html'
})
export class DetailsPage {
    cat: string;
    products: any;
    allProducts: any;
  constructor(public navCtrl: NavController, public param: NavParams) {
    this.cat = param.get('cat');
    this.allProducts = param.get('products');
    this.getProductsByCat();
  }

  getProductsByCat(){
    this.products = new Array();
    this.allProducts.forEach((product, index)=>{
      if(product.category == this.cat){
        this.products.push(product);
      }
    });
  }
}
