import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product.model';
import { ProductServices } from 'src/app/_service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product!:Product;
  relatedProductsArray!:Product[];

  constructor(private activatedRoute :ActivatedRoute ,private productService :ProductServices) { }

  ngOnInit(): void {
    // const id =this.activatedRoute.snapshot.params['productId'];
    console.log(this.activatedRoute.snapshot.queryParams);
    // console.log(this.activatedRoute.snapshot.queryParams.subscribe());
    this.activatedRoute.params.subscribe(
      (params)=>{
        const id = params['productId'] ;
        if(id){
          this.getProductById(id);
          this.getAllProducts();
        }
      }
    )
   
  }
  getProductById(id:string){
    this.productService.getProductById(id).subscribe(
      (res)=>{
        this.product=res;
      }
    )
  }
  getAllProducts(){
    this.productService.getAllProducts().subscribe(
      (res)=>{
        this.relatedProductsArray=res.product.splice(0,6);

      }
    )
  }

}
