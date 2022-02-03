// import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductServices } from 'src/app/_service/product.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  productItem !:Product;
  // @Output()
  // itemAdded : EventEmitter<Product>=new EventEmitter<Product>();
  // productService = new ProductServices();

  constructor(private productService : ProductServices) { }

  ngOnInit(): void {
  }
  onAddToCartPressed(){
    this.productService.itemAdded.emit(this.productItem);

    // this.productService.itemAdded.emit(this.productItem);
    // this.productService.addItemToCart(this.productItem);
  }

}
