import { Item } from './item.model'; // adjust the path as necessary

export class Order {
[x: string]: any;
    id:string;
  orderNo: string;
  contactName: string;
  orderDate: string;
  itemsOrdered: Item[];
  orderTotal: number;
  taxTotal: number;
  grandTotal: number;

  constructor(id: string,orderNo: string, contactName: string, orderDate: string, itemsOrdered: Item[], orderTotal: number, taxTotal: number, grandTotal: number) {
    this.id = id;
    this.orderNo = orderNo;
    this.contactName = contactName;
    this.orderDate = orderDate;
    this.itemsOrdered = itemsOrdered;
    this.orderTotal = orderTotal;
    this.taxTotal = taxTotal;
    this.grandTotal = grandTotal;
  }
}