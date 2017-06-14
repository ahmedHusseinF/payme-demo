import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class authService{
    http: any;
    baseUrl: string;
    
    constructor(http:Http){
        this.http = http;
        this.baseUrl = "http://devx.paymeapp.co/api/v2/login?";
    }

    authAPI(email, password){
        return this.http.post(this.baseUrl + "email=" + email + "&password=" + password)
        .map((res) => res.json());
    }
} 

