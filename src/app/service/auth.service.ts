import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
    });

    constructor(
        private config: ConfigService,
        private http: HttpClient
    ) {
    }

    authenticate(email, password) {
        return this.http.post(this.config.apiUrl + 'login', {
            email: email,
            password: password
        }, {headers: this.headers});
    }
}
