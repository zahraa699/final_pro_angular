import { Injectable } from '@angular/core';
import { Category } from '../_models/category.model';
import { ProductServices } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories :Category[]=[
    {id:1 , name :'phones'},
    {id:2 , name :'camera'},
    {id:3 , name :'baby toys'},
    {id:4 , name :'bread'},
    {id:5 , name :'Mc'},
    {id:6 , name :'vegetables'},
    {id:7 , name :'fruits'},
    {id:8 , name :'meat'}
  ]


  constructor() { }
  getAllCategories(): Category[]{
    return this.categories.splice(0);

  }
  getCategoryById(id:number):Category | undefined{
    return this.categories.find(category=> category.id === id);
  }
  add(){}
  delete(){}
  update(){}

}
