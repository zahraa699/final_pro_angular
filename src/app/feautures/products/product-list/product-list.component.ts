import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductServices } from 'src/app/_service/product.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/_service/auth/auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
productsarray!:Product[];
productArray$!: Observable<{product: Product[], numberOfProducts: number}>;
@Output()
itemAddedFromProductListComponent :EventEmitter<Product>=new EventEmitter<Product>();
// productService=new ProductServices();
  constructor(private productService : ProductServices , private authService: AuthService) { }

  ngOnInit(): void {
    this.productArray$=this.productService.getAllProducts();
  }
  getAllProducts(){
    this.productService.getAllProducts().subscribe(
      (res)=>{
        this.productsarray = res.product;
      },
      (err)=>{
        console.log('error happened and catched from the component',err);
      },
      ()=>{}
    );

    const user = {
      email: 'elzahraa@test.com',
      password: '12345',
    }
    this.authService.login(user).subscribe(
      (res)=>{
        localStorage.setItem('token', res.token)
      }
    )
  }



  onItemAdded(product : Product){
    // console.log(ev);
    this.itemAddedFromProductListComponent.emit(product);

  }

}
 
