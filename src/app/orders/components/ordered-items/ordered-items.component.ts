import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Item } from '../../models/item.model';
import { Order } from '../../models/order.model';
import { OrderserviceService } from '../../services/orderservice.service';

@Component({
  selector: 'app-ordered-items',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './ordered-items.component.html',
  styleUrl: './ordered-items.component.css'
})
export class OrderedItemsComponent {
  items: Item[] = [];
  orders: Order[] = [];
  itemsid: String[] = [];
  insta: string = "";

  constructor(private http: HttpClient, private os: OrderserviceService) { }

  // getbyid(id: string) {
  //   this.http.get("http://localhost:3000/order/" + id).subscribe((data: any) => {

  //   })
  // }

  getorderbyid(id: string) {
    this.os.getOrdersById(id).subscribe((data: any) => {
      console.log(data);
      this.orders = data;
      this.itemsid = data.itemsOrdered.map((itemNo: any) => {
        let item = data.items.find((item: { itemNo: any; }) => item.itemNo === itemNo);
        console.log(item);



      })

    })

  }
}