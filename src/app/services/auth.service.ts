import { Injectable } from "@angular/core";
import { Device } from '@ionic-native/device';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class authService{
    http: any;
    data: any;
    baseUrl: string;
    constructor( http:Http, private device:Device){
        this.http = http;
        this.baseUrl = "http://devx.paymeapp.co/api/v2/login?";
    }

    authAPI(email, password){
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});
        let model = this.device.model;
        let platform = this.device.platform;
        return this.http.post(this.baseUrl + "email=" + email + "&password=" + password+ "&device_model=" + model + "&device_platform=" + platform + "&app_version=1.0", {}, options)
        .map((res) => {
            return res.json();
        });
    }
} 

