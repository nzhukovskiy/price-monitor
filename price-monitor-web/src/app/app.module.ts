import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/nav/header/header.component';
import { SingleProductComponent } from './components/products/single-product/single-product.component';
import { ProductsContainerComponent } from './components/products/products-container/products-container.component';
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {ProductService} from "./services/product/product.service";

const routes: Routes = [
  {path: '', component: MainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    SingleProductComponent,
    ProductsContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
