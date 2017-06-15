import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class fetchService{
    http: any;
    baseUrl: string;
    
    constructor(http:Http){
        this.http = http;
        this.baseUrl = "http://devx.paymeapp.co/api/v2/mobile/home?";
    }

    fetch(token){
        return this.http.post(this.baseUrl + "token=" + token)
        .map((res) => {
            res.json();
        });
    }
    
} 