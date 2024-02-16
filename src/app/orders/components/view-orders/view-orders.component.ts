
import { Component } from '@angular/core';
import { Order } from '../../models/order.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderserviceService } from '../../services/orderservice.service';
import { routes } from '../../../app.routes';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../models/item.model';






@Component({
  selector: 'app-view-orders',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.css'
})

export class ViewOrdersComponent {

  constructor(private http: HttpClient,private orderService: OrderserviceService) { 
    this.getOrders();
  }
  orders: Order[] = [];
  orders1: Order[] = [];
  ngOnInit() {
    this.getOrders();
  }
  getOrders(): void {
    this.http.get<Order[]>('http://localhost:3000/orders')
      .subscribe(data => {
        this.orders = data;
      }, error => {
        console.error('Error:', error);
      });
  }
  delete(id: string): void {
    this.http.delete("http://localhost:3000/orders/"+id).subscribe((data: any) => {
      this.orders1 = data;
      console.log(this.orders1)
      this.getOrders();
    })
    
}
// addorders(id:string,name:string,age:string,species:string) {
//   let stdata= {
//     "id" :id,
//     "name": name,
//     "species": species,
//     "color": age
//   }
//   this.http.post("http://localhost:3000/petdetails",stdata).subscribe((data: any) => {
//     this.fetch = data
//     console.log(this.fetch)
//     this.getOrders();

  // })
// updatefetch(id:string){
//   const c=this.orders.find((p:Order) =>  p.id ===id)
  
//   if(c){
//     this.orders.id=c.id;
//     this.orders.contactName=c.contactName;
//     this.orders.age=c.age;
//     this.orders.species=c.species;
// }
}
