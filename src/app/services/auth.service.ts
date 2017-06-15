import { Injectable } from "@angular/core";
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class authService{
    http: any;
    baseUrl: string;
    constructor( http:Http){
        this.http = http;
        this.baseUrl = "http://devx.paymeapp.co/api/v2/login?";
    }

    authAPI(email, password){
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});
        return this.http.post(this.baseUrl + "email=" + email + "&password=" + password, {}, options)
        .map((res) => {
            console.log(res.json());
            res.json();
        });
    }
} 

