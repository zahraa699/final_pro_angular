import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.css'] 
})
export class ProductListContainerComponent implements OnInit {
  liItems={
    className:'link__icon fas fa-angle-right'
  }
  @Output()

  onItemAddedFromContainer :EventEmitter<Product>=new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }
  onItemAdded(product :Product ){
    // console.log(ev);
    this.onItemAddedFromContainer.emit(product);
    

  }

}
