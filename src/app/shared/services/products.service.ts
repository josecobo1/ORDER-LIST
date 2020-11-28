import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _url: string = environment.URL;

  constructor(private http: HttpClient) { }

  read$(){
    return this.http.get<string[]>(`${this._url}/products`);
  }

}
