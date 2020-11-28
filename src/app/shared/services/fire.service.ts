import { Observable } from 'rxjs';
import { Order } from './../interfaces/order';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private afs: AngularFirestore) { }

  read$(): Observable<Order[]>{
    return  this.afs.collection<Order>('orders').valueChanges();
  }

  create(order: Order): Promise<void>{
    return this.afs.collection<Order>('orders').doc(order.id).set(order);
  }

  products$(): Observable<Product[]>{
    return this.afs.collection<Product>('products').valueChanges();
  }

}
