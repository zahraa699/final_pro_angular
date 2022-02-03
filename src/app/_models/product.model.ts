import { Category } from "./category.model";
import { PaymentType } from "./payment-type.model";
import { Productlang } from "./product-lang.model";
import { Tag } from "./tags.model";

// interface 
export interface Product {
    id?:number,
    data:Productlang[],
    price:number,
    discount?:number,
    imageUrls:string[],
    category:Category,
    paymentTypes:PaymentType[],
    tags:Tag[]
    
} 