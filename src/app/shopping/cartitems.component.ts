import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { CartItem } from '../models/cartitem.model';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styles: []
})
export class CartitemsComponent implements OnInit {
  cartItems : CartItem[] = [] 
  constructor(private csvc: CartService) { }

  ngOnInit() {
    this.cartItems = this.csvc.getCartItems();
  }
  delete(index){
    this.csvc.deleteCartItem(index);
  }
  totalAmount(){
    let tot = 0;
    for(let e of this.cartItems){
      tot += (e.price* e.qty);
    }
    return tot;
  }

}
