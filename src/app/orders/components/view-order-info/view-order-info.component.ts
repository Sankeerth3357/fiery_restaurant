import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Item } from '../../models/item.model';
import { CommonModule } from '@angular/common';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-view-item-info',
  standalone: true,
  imports: [RouterModule, HttpClientModule, CommonModule],
  templateUrl: './view-order-info.component.html',
  styleUrl: './view-order-info.component.css'
})
export class ViewitemInfoComponent {
  orders: Order[] = [];

  constructor(private http: HttpClient) {
    this.getitems();
  }
  img: string = "";
  items1: Item[] = [];
  items: Item[] = [];
  ngOnInit() {
    this.getitems();

  }
  getitems(): void {
    this.http.get<Item[]>('http://localhost:3000/items')
      .subscribe(data => {
        this.items = data;
        console.log(this.items)
      }, error => {
        console.error('Error:', error);
      });

  }
  delete(id: string): void {
    this.http.delete("http://localhost:3000/items/" + id).subscribe((data: any) => {
      this.items1 = data;
      console.log(this.items1)
      this.getitems();
    })

  }
  stsdata: any = [];
  additems(itemno: string, name: string, q: string, p: number, v: number, i: string) {
    this.stsdata = {
      itemNo: itemno,
      name: name,
      quantity: q,
      price: p,
      itemValue: v,
      image: "i"
    }
    this.http.post("http://localhost:3000/items", this.stsdata).subscribe((data: any) => {
      this.items = data
      console.log(this.items)
      this.getitems();

    })

  }
  getorderbyid(id: string) {
    this.http.get<Order[]>('http://localhost:3000/orders')
      .subscribe((data: Order[]) => {
        this.orders = data;
        let ord = this.orders.find((order) => order.id === id);

        



      }, (error: any) => {
        console.error('Error:', error);
      });




  }
}

