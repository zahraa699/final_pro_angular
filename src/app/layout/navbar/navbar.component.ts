import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductServices } from 'src/app/_service/product.service'
// import { ProductServices } from 'src/app/_setvices/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit ,OnChanges {
  cartIsOpen=false;
  theAddedProduct:Product[]=[];
  cart!:{
    productsarray:Product[],
    quantity:number
  }
  // productService = new ProductServices();

  constructor(private productService : ProductServices) {
    console.log('construct');
   }
  ngOnChanges() {
    console.log('onChanges');
  }


  ngOnInit(): void {
    // this.theAddedProduct = this.productService.cartArray;
    this.productService.itemAdded.subscribe(
      (next)=>{
        this.cart.productsarray.push(next);
        this.cart.quantity++;
       console.log(next);
      },
      (error)=>{},
      ()=>{}
    )
    console.log('onInit');
  }

}
