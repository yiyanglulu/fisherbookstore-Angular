import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { OrderComponent } from './order/order.component';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent},
  { path: 'orders', component: OrderComponent},
  { path: '', component: HomeComponent,pathMatch: 'full'},
  { path: '**', component: NotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRouterModule { }