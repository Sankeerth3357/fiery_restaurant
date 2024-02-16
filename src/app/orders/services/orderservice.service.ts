import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  constructor(private http: HttpClient) { }
  getOrders() {
    return this.http.get<Order[]>('http://localhost:3000/orders');
  }

  getOrdersById(id: any) {
    return this.http.get<Order[]>('http://localhost:3000/orders/' + id);
  }

}
