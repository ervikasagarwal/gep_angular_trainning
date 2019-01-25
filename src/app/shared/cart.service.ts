import { Injectable } from "@angular/core";
import { CartItem } from "../models/cartitem.model";

@Injectable()
export class CartService{
  private cartData :CartItem[] =[];
  getCartItems(){
      return this.cartData;
  }
  addCartItem(newItem: CartItem){
       this.cartData.push(newItem);
  }
  deleteCartItem(index:number){
      this.cartData.splice(index,1);
  }
}

// non UI login here 