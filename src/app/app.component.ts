import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OrderserviceService } from './orders/services/orderservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private http: HttpClient, private os: OrderserviceService) { }
  title = 'fiery_restaurant';
  getorderbyid(id: string) {
    this.os.getOrdersById(id).subscribe((data: any) => {
      console.log(data);




    })

  }


}
