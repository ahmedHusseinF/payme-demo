import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class fetchService{
    http: any;
    baseUrl: string;
    locationUrl: string;
    constructor(http:Http){
        this.http = http;
        this.baseUrl = "http://devx.paymeapp.co/api/v2/mobile/home?";
        this.locationUrl = "https://maps.googleapis.com/maps/api/geocode/json?";
    }

    fetch(token){
        //console.log(token);
        return this.http.post(this.baseUrl + "token=" + token)
        .map((res) => {
            return res.json();
        });
    }

    getLocation(lat,long){
        return this.http.get(this.locationUrl + "latlng=" + lat + "," + long)
        .map((res)=>{
            return res.json();
        })
    }
} 