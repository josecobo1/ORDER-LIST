import { Observable } from 'rxjs';
import { FireService } from './../shared/services/fire.service';
import { Order } from '../shared/interfaces/order';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  lista: Observable<Order[]>;
  orderList: Order[];
  name: string = localStorage.getItem('name');


  constructor(private fireService: FireService) { }

  ngOnInit(): void {

    // Al recibir la lista de pedidos filtramos para que solo se asginen a la variable orderList
    // los productos del camarero correcto
    // this.orderService.read$().subscribe(
    //   data => this.orderList = data.filter(
    //     e => e.name === localStorage.getItem('name')
    //     )
    //   );

    this.lista = this.fireService.read$();

  }

}
