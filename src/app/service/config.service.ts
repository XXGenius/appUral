import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
    public apiUrl = 'https://api.appsuralchem.ru/api/';
    public authToken = localStorage.getItem('authToken');
  constructor() { }
}
