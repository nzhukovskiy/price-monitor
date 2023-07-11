import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/nav/header/header.component';
import { SingleProductComponent } from './components/products/single-product/single-product.component';
import { ProductsContainerComponent } from './components/products/products-container/products-container.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "./services/product/product.service";
import { SpinnerComponent } from './components/ui/spinner/spinner.component';
import { LinkComponent } from './components/link/link.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { SellerLogoComponent } from './components/products/seller-logo/seller-logo.component';
import { SellerPipe } from './pipes/seller/seller.pipe';
import { SortPipe } from './pipes/sort/sort.pipe';
import { FiltersComponent } from './components/products/filters/filters.component';
import {MatMenuModule} from "@angular/material/menu";

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
    SpinnerComponent,
    LinkComponent,
    SellerLogoComponent,
    SellerPipe,
    SortPipe,
    FiltersComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialModule,
        MatIconModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        FormsModule
    ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
