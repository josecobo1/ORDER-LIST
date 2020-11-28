import { Product } from './../shared/interfaces/product';
import { FireService } from './../shared/services/fire.service';
import { ProductsService } from '../shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {v4 as uuid} from 'uuid';
import { Order } from '../shared/interfaces/order';
import { OrderService } from '../shared/services/order.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  error = false;

  // products = [
  //   "Americano",
  //   "Flat White",
  //   "Cappuccino",
  //   "Latte",
  //   "Espresso",
  //   "Machiato",
  //   "Mocha",
  //   "Hot Chocolate",
  //   "Tea"
  // ];

  products: Observable<Product[]>;

  sendSuccess = false;
  removable = true;
  orderProducts: Product[];

  formGroup: FormGroup;


  constructor(private fb: FormBuilder, private orderService: OrderService,
              private productService: ProductsService,
              private fireService: FireService) {
    this.orderProducts = [];
  }

  ngOnInit(): void {

    //this.productService.read$().subscribe(products => this.products = products);
    this.products = this.fireService.products$();

    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      table:['', Validators.required]
    });
  }

  addToOrder(product){
    this.orderProducts.push(product);
  }

  removeFromOrder(i){
    this.orderProducts.splice(i, 1);
  }

  // hay qeu poner async porque la función es asincrona en la parte de usar el servicio para enviar el objeto al server
  async submit(){

    if(this.formGroup.invalid) {
      return this.error = true;
    }

    const { name, table } = this.formGroup.value;

    const order: Order = {
      id:      uuid(),
      name,
      table,
      /*     this.form.get('name').value,
      table:   this.form.get('table').value, */
      products: this.orderProducts
    };

    console.log(order);

    // this.orderService.create(order);
    await this.fireService.create(order); // await porque es asincrona
    this.formGroup.reset();
    this.orderProducts = [];
    this.sendSuccess = true;
    setTimeout(_ => this.sendSuccess = false, 2000);

    // Actualixo el valor del local storgae name
    localStorage.setItem('name', name);



  }

}
