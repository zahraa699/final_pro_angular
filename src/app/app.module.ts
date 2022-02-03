import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { TopNavbarComponent } from './layout/top-navbar/top-navbar.component';
import { ProductItemComponent } from './feautures/products/product-item/product-item.component';
import { ProductListComponent } from './feautures/products/product-list/product-list.component';
import { ProductListContainerComponent } from './feautures/products/product-list-container/product-list-container.component';
import { DropDownComponent } from './shared/drop-down/drop-down.component';
import { ProductServices } from './_service/product.service';
import { ProductDetailsComponent } from './feautures/products/product-details/product-details.component';
import { ProductAddComponent } from './feautures/products/product-add/product-add.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './layout/login/login.component';
import { RegisterComponent } from './layout/register/register.component';
import { ErrorConnectionComponent } from './error/error-connection/error-connection.component';
import { ItemToolsComponent } from './items/item-tools/item-tools.component';
import { PagingComponent } from './items/paging/paging.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopNavbarComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductListContainerComponent,
    DropDownComponent,
    ProductDetailsComponent,
    ProductAddComponent,
    LoginComponent,
    RegisterComponent,
    ErrorConnectionComponent,
    ItemToolsComponent,
    PagingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
