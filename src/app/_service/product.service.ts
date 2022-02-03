import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { url } from "inspector";
import { environment } from "src/environments/environment";
import { Product } from "../_models/product.model";
import { Observable, observable } from "rxjs";
import { CategoryService } from "./category.service";
@Injectable({
    providedIn: 'root'
  })
export class ProductServices{

    itemAdded:EventEmitter<any> = new EventEmitter<any>();
    // productArray:Product[]=[
    //     {
    //     id:1,
    //     data:[ {id:1, name: 'photo carmera', description: 'Product 1 description', lang: {id:1, name: 'English'}}],
    //     price:100,discount:10,
    //     imageUrl:'https://picsum.photos/200/300' ,
    //     category: {id: 1, name: 'Category 1'},
    //     tags: [{id: 1, name: 'Tag 1'}, {id: 2, name: 'Tag 2'}],
    //      paymentTypes: [{id: 1, name: 'Visa'},]
    //     },
    //     {
    //     id:2,
    //     data:[ {id:2, name: 'carmera', description: 'Product 2 description', lang: {id:2, name: 'English'}}],
    //     price:200,discount:10,
    //     imageUrl:'https://picsum.photos/200/400' ,
    //     category: {id: 2, name: 'Category 2'},
    //     tags: [{id: 3, name: 'Tag 3'}, {id: 4, name: 'Tag 4'}],
    //     paymentTypes: [{id: 2, name: 'Visa'},]
    //     },
    //     {
    //     id:3,
    //     data:[ {id:3, name: 'mobile phone', description: 'Product 3 description', lang: {id:3, name: 'English'}}],
    //     price:300,
    //     imageUrl:'https://picsum.photos/200/500' ,
    //     category: {id: 3, name: 'Category 3'},
    //     tags: [{id: 5, name: 'Tag 5'}, {id: 6, name: 'Tag 6'}],
    //      paymentTypes: [{id: 3, name: 'Visa'},]
    //     },
    //     {
    //     id:4,
        
    //     data:[ {id:4, name: 'car', description: 'Product 4 description', lang: {id:4, name: 'English'}}],
    //     price:400,
    //     discount:10,
    //     imageUrl:'https://picsum.photos/200/600' ,
    //     category: {id: 4, name: 'Category 4'},
    //     tags: [{id: 7, name: 'Tag 7'}, {id: 8, name: 'Tag 8'}],
    //      paymentTypes: [{id: 4, name: 'Visa'},]
    //     },
    //     {
    //     id:5,
    //     data:[ {id:5, name: 'shose', description: 'Product 5 description', lang: {id:5, name: 'English'}}],
    //     price:500,
    //     imageUrl:'https://picsum.photos/200/50' ,
    //     category: {id: 5, name: 'Category 5'},
    //     tags: [{id: 9, name: 'Tag 9'}, {id: 10, name: 'Tag 10'}],
    //      paymentTypes: [{id: 5, name: 'Visa'},]
    //      },
    //     {
    //     id:6,
    //     data:[ {id:6, name: 'skirt', description: 'Product 6 description', lang: {id:6, name: 'English'}}],
    //     price:600,
    //     discount:10,
    //     imageUrl:'https://picsum.photos/200/50' ,
    //     category: {id: 6, name: 'Category 6'},
    //     tags: [{id: 11, name: 'Tag 11'}, {id: 12, name: 'Tag 12'}],
    //      paymentTypes: [{id: 6, name: 'Visa'},]
    //     },
    //     {
    //     id:7,
    //     data:[ {id:7, name: 'bluse', description: 'Product 7 description', lang: {id:7, name: 'English'}}],
    //     price:700,
    //     imageUrl:'https://picsum.photos/200/50' ,
    //     category: {id: 7, name: 'Category 7'},
    //     tags: [{id: 13, name: 'Tag 13'}, {id: 14, name: 'Tag 14'}],
    //      paymentTypes: [{id: 7, name: 'Visa'},]
    //     },
    //     {
    //     id:8,
    //     data:[ {id:8, name: 'machine', description: 'Product 8 description', lang: {id:8, name: 'English'}}],
    //     price:800,
    //     discount:10,
    //     imageUrl:'https://picsum.photos/200/50' ,
    //     category: {id: 8, name: 'Category 8'},
    //     tags: [{id: 15, name: 'Tag 15'}, {id: 16, name: 'Tag 16'}],
    //      paymentTypes: [{id: 8, name: 'Visa'},]
    //     },
    //     {
    //     id:9,
    //     data:[ {id:9, name: 'electricity', description: 'Product 9 description', lang: {id:9, name: 'English'}}],
    //     price:900,
    //     imageUrl:'https://picsum.photos/200/50' ,
    //     category: {id: 9, name: 'Category 9'},
    //     tags: [{id: 17, name: 'Tag 17'}, {id: 18, name: 'Tag 18'}],
    //     paymentTypes: [{id: 9, name: 'Visa'},]
    //     }
    //     ];
    cartArray:Product[]=[];
    constructor(private httpClient : HttpClient){
    
        // this.itemAdd.subscribe()
    }
    getAllProducts(): Observable<{product: Product[], numberOfProducts: number}> {
        const token: string = localStorage.getItem('token')!;
        const headers = new HttpHeaders({
          authorization: token
        })
       return this.httpClient.get<{product: Product[], numberOfProducts: number}>(`${environment.baseUrl}product`, {headers})
      }
    
      getProductById(id: string): Observable<Product> {
        return this.httpClient.get<Product>(environment.baseUrl+'product/'+id)
      }
    // addProduct(product:Product){
    // this.productArray.push(product);
    // }
    // deleteProduct(id:number){
    //    return this.productArray.filter(item => item.id !=id)
    // }
    addItemToCart(product :Product):Product[]{
        console.log(this.cartArray);
        this.cartArray.push(product);
        const res =this.cartArray;
        console.log(res);
        return res ;
    }
    updateProduct(){}
    testEmit(product :Product){
    this.itemAdded.emit(product);

    }
    }