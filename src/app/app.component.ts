import { Component } from '@angular/core';
import { Product } from './_models/product.model';
// interface Cart{
//   product:Product[];
//   totalNumber


// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab2';
  addedProducts: Product[]=[];
  onItemAdd(product:Product){
    this.addedProducts.push(product);
    // this.addedProduct=product
  }

}
