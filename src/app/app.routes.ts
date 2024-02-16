import { Routes } from '@angular/router';
import { ViewOrdersComponent } from './orders/components/view-orders/view-orders.component';
import { ViewitemInfoComponent } from './orders/components/view-order-info/view-order-info.component';
import path from 'path';
import { OrderedItemsComponent } from './orders/components/ordered-items/ordered-items.component';

export const routes: Routes = [
    // { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'order', component: ViewOrdersComponent },
    { path: 'items', component: ViewitemInfoComponent },
    { path: 'ordereditems', component: OrderedItemsComponent }

    // {path: 'orders',model: Order}
];
