import { Injectable } from '@angular/core';
import { PaymentType } from '../_models/payment-type.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
  paymentMethods:PaymentType[]=[
    {id:1 , name :'Visa'},
    {id:2 , name :'Mastercard'},
    {id:3 , name :'American Express'},
    {id:4 , name :'Paypal'},
    {id:5 , name :'Cash'},
  ]

  constructor() { }
  getAllPaymentMethods():PaymentType[]{
    return this.paymentMethods.splice(0);
  }
}
