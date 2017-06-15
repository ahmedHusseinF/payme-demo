import { Component } from '@angular/core';
import { NavController, } from 'ionic-angular';
import { fetchService } from '../../app/services/fetch.service';
import { DetailsPage } from '../details/details';
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  items: any = {
    "merchants": [
        {
            "name": "PayME",
            "description": null,
            "logo": "https://s3.amazonaws.com/paymeimg/logos/PayME.png",
            "qr_code": "00010101"
        },
        {
            "name": "McDonalds",
            "description": null,
            "logo": "https://s3.amazonaws.com/paymeimg/logos/McDonalds.jpg",
            "qr_code": "00030101"
        },
        {
            "name": "FC Barcelona",
            "description": null,
            "logo": "https://app.paymeapp.co/logos/download.png",
            "qr_code": "00040101"
        },
        {
            "name": "PayME App",
            "description": null,
            "logo": null,
            "qr_code": "00050101"
        },
        {
            "name": "Abdallah",
            "description": null,
            "logo": "https://app.paymeapp.co/logos/Abdallah.jpg?v=1.2",
            "qr_code": "00060101"
        },
        {
            "name": "zalbya",
            "description": null,
            "logo": null,
            "qr_code": "00070101"
        },
        {
            "name": "SOUQ",
            "description": null,
            "logo": "https://s3.amazonaws.com/paymeimg/logos/SOUQ.png",
            "qr_code": "00080101"
        },
        {
            "name": "Aramex",
            "description": null,
            "logo": "https://app.paymeapp.co/logos/Aramex.png",
            "qr_code": "00090101"
        },
        {
            "name": "seoudi",
            "description": "Big super market",
            "logo": "https://s3.amazonaws.com/paymeimg/logos/seoudi.jpg",
            "qr_code": "00100101"
        },
        {
            "name": "Madrid",
            "description": null,
            "logo": "https://app.paymeapp.co/logos/Madrid.png",
            "qr_code": "00110101"
        },
        {
            "name": "merchprof",
            "description": null,
            "logo": "https://app.paymeapp.co/logos/merchprof.png",
            "qr_code": "00130101"
        },
        {
            "name": "Life Makers",
            "description": null,
            "logo": "https://s3.amazonaws.com/paymeimg/logos/Life Makers.png",
            "qr_code": "00140101"
        },
        {
            "name": "Egy Delivery",
            "description": null,
            "logo": "https://s3.amazonaws.com/paymeimg/logos/Egy Delivery.png",
            "qr_code": "00150101"
        },
        {
            "name": "Kites Egypt",
            "description": null,
            "logo": "https://s3.amazonaws.com/paymeimg/logos/Kites Egypt.png",
            "qr_code": "00160101"
        },
        {
            "name": "merchantTrial",
            "description": null,
            "logo": "https://s3.amazonaws.com/paymeimg/logos/merchantTrial.png",
            "qr_code": "00170101"
        },
        {
            "name": "merchantTrial2",
            "description": null,
            "logo": "https://s3.amazonaws.com/paymeimg/logos/merchantTrial2.png",
            "qr_code": "00180101"
        },
        {
            "name": "merchantTest2",
            "description": null,
            "logo": "https://s3.amazonaws.com/paymeimg/logos/merchantTest2.png",
            "qr_code": "00190101"
        },
        {
            "name": "abdallah654654",
            "description": null,
            "logo": "https://s3.amazonaws.com/payme-dev/logos/abdallah654654.png",
            "qr_code": "00200101"
        },
        {
            "name": "merchant2",
            "description": null,
            "logo": null,
            "qr_code": "00210101"
        },
        {
            "name": "asjnd",
            "description": null,
            "logo": null,
            "qr_code": "00220101"
        },
        {
            "name": "newM",
            "description": null,
            "logo": null,
            "qr_code": "00230101"
        },
        {
            "name": "Worc",
            "description": null,
            "logo": "https://s3.amazonaws.com/payme-dev/logos/Worc.png",
            "qr_code": "00240101"
        },
        {
            "name": "CenturionCo",
            "description": null,
            "logo": "https://s3.amazonaws.com/payme-dev/logos/CenturionCo.png",
            "qr_code": "00260101"
        },
        {
            "name": "TheLeague",
            "description": "The League is a tech-enabled event management startup that works in the field of entertainment.",
            "logo": "https://s3.amazonaws.com/payme-dev/logos/TheLeague.jpg",
            "qr_code": "00270101"
        },
        {
            "name": "paymestore",
            "description": "buy and sell online",
            "logo": null,
            "qr_code": "00280101"
        }
    ],
    "products": [
        {
            "id": 3,
            "title": "orange",
            "image": "https://s3.amazonaws.com/payme-dev/products_images/3.jpg",
            "description": "Product Desc",
            "category": "Education"
        },
        {
            "id": 11,
            "title": "pro1",
            "image": "https://s3.amazonaws.com/payme-dev/products_images/4.png",
            "description": "testing product",
            "category": "Charity"
        },
        {
            "id": 12,
            "title": "pro1",
            "image": null,
            "description": "testing product",
            "category": "Charity"
        },
        {
            "id": 14,
            "title": "pro1",
            "image": null,
            "description": "testing product",
            "category": "Charity"
        },
        {
            "id": 15,
            "title": "prod2",
            "image": null,
            "description": "njndjn",
            "category": "Tourism"
        },
        {
            "id": 17,
            "title": "prod4",
            "image": null,
            "description": "lajdnj",
            "category": "Tourism"
        },
        {
            "id": 18,
            "title": "Orange Prepaid",
            "image": null,
            "description": "Charge your orange",
            "category": "Online shopping"
        },
        {
            "id": 19,
            "title": "product title",
            "image": "https://app.paymeapp.cohttps://s3.amazonaws.com/payme-dev/products_images/19.jpg",
            "description": "desc",
            "category": "Tourism"
        },
        {
            "id": 20,
            "title": "Orange Recharge Service",
            "image": "https://s3.amazonaws.com/payme-dev/products_images/20.png",
            "description": "Test orange recharge service for the first time by sabry ragab",
            "category": "Financial services"
        }
    ],
    "promotions": [
        {
            "id": 4,
            "title": "Promotion title",
            "image": "https://s3.amazonaws.com/payme-dev/products_images/4.png",
            "description": "Promotion Desc",
            "category": "Tourism"
        },
        {
            "id": 16,
            "title": "prod3",
            "image": "https://s3.amazonaws.com/payme-dev/products_images/16.png",
            "description": "lajdnj",
            "category": "Tourism"
        }
    ]
};
  token: string;
  location: string;
  categories: any;
  constructor(public navCtrl: NavController, private fetch: fetchService) {   //incomplete
    //this.token = localStorage.getItem('token');
    //this.fetch.fetch(this.token);
    this.findCategories();
  }

  findCategories(){     //complete
    this.categories = [];
    for(let item of this.items.products){
      if(this.categories.indexOf(item.category) == -1){
        this.categories.push(item.category);
      }
    }
  }

  viewProducts(cat){
    this.navCtrl.push(DetailsPage,{
      products: this.items.products,
      cat: cat
    })
  }


}
