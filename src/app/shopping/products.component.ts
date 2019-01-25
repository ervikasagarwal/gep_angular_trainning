import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../models/product.model';
import { CartItem } from '../models/cartitem.model';
import { CartService } from '../shared/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  myDate = new Date();
  queryString :string = "";
  constructor(private psvc:ProductService, private cs:CartService, private ar:ActivatedRoute) { }

  ngOnInit() {
    // this.products = this.psvc.getProducts();
    // console.log(this.products)
    // params is an observable type object
    this.ar.params.subscribe((paramData)=>{
      let paramId = paramData.ctgid;
      if(paramId == undefined){
        this.products  =  this.psvc.getProducts()
      } else{
        this.products = this.psvc.getProducts().filter((e)=>e.ctgid == paramId)
      }
    })
  }
  addToCart(selectedProduct: Product){
    let newitem = new CartItem(selectedProduct.id, selectedProduct.name,selectedProduct.price,1);
    this.cs.addCartItem(newitem);
  }

}
