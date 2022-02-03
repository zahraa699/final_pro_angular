import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Category } from 'src/app/_models/category.model';
import { PaymentType } from 'src/app/_models/payment-type.model';
import { Product } from 'src/app/_models/product.model';
import { CategoryService } from 'src/app/_service/category.service';
import { PaymentMethodService } from 'src/app/_service/payment-method.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  categories!:Category[];
  paymentTypes !: PaymentType[];
  product={} as Product;
  constructor(private categoryService: CategoryService , private paymentMethodService :PaymentMethodService , private router:Router) { }

  ngOnInit(): void {
    this.categories=this.getAllCategories();
    this.paymentTypes=this.getAllPaymentTypes();
    this.product = {
      id: 1,
      data: [
        {
          id: 1,
          name: 'Product 1',
          description: 'Product 1 description',
          lang: { id: 1, name: 'English' },
        },
      ],
      price: 100,
      discount: 10,
      imageUrls: ['https://picsum.photos/200/300'],
      category: { id: 1, name: 'Category 1' },
      tags: [
        { id: 1, name: 'Tag 1' },
        { id: 2, name: 'Tag 2' },
      ],
      paymentTypes: [{ id: 1, name: 'Visa' }],
    };
  }
  getAllCategories():Category[]{
    return this.categoryService.getAllCategories();
  }
  getAllPaymentTypes():PaymentType[]{
    return this.paymentMethodService.getAllPaymentMethods();
  }
  onCheckBoxChanged(i:number){
    this.paymentTypes[i];
  }
  onFormSubmit(form:any):void{
    this.router.navigateByUrl('/home');
    console.log(form);
    // this.product={...form.value};
    // this.product.paymentTypes=this.paymentTypes;

  }

}
