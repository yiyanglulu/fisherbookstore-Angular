import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AppRouterModule } from './/router.module';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BooksService } from './books/books.service';

//import { RouterModule } from './router/router.module';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent,
    HomeComponent,
    OrderComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
    OrderComponent,
    
    
  ],
  imports: [
    BrowserModule,FormsModule, AppRouterModule,HttpClientModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }