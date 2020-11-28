import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _url: string =  environment.URL;
  private refresh$ = new BehaviorSubject(null); // Observable caliente


  constructor(private http:HttpClient) { }

  create(order: Order){

    return this.http.post<Order>(`${this._url}/orders`, order)
                              .subscribe(() => this.refresh$.next(null));
    // Cada vez que creee un elemento nuevo lo emitimos


  }

  read$(){

    //return this.http.get<Order[]>(`${this._url}/orders`); // Observable frio

    return this.refresh$.pipe(switchMap(() =>
                        this.http.get<Order[]>(`${this._url}/orders`)));

  }





}
