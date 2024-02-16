export class Item {
    id:string;
    itemNo: string;
    name: string;
    quantity: number;
    price: number;
    itemValue: number;
water: any;
  
    constructor(id:string,itemNo: string, name: string, quantity: number, price: number, itemValue: number,water: string) {
        this.id = id;
        this.itemNo = itemNo;
      this.name = name;
      this.quantity = quantity;
      this.price = price;
      this.itemValue = itemValue;
      this.water =water;
    }
  }
  
  
  
  