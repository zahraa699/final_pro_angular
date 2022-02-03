import { NgModule } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { ErrorConnectionComponent } from './error/error-connection/error-connection.component';
import { ProductAddComponent } from './feautures/products/product-add/product-add.component';
import { ProductDetailsComponent } from './feautures/products/product-details/product-details.component';
import { ProductListContainerComponent } from './feautures/products/product-list-container/product-list-container.component';
import { AboutUsComponent } from './layout/about-us/about-us.component';
import { LoginComponent } from './layout/login/login.component';
import { RegisterComponent } from './layout/register/register.component';

const routes: Routes = [
  {path:'home', component : ProductListContainerComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path :'product' , children:[
    {path:'details/:productId',component :ProductDetailsComponent},
    {path:'add',component :ProductAddComponent}

  ]},
  {path: 'About-Us' , component:AboutUsComponent},
  {path: 'login' , component:LoginComponent},
  {path: 'register' , component:RegisterComponent},
  {path: '**' , component: ErrorConnectionComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
