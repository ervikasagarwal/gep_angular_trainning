import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";

@Injectable()
export class ProductService{
  private productsData :Product[] =[];
  constructor(){
      this.productsData = [
        new Product(1,"Bravia", 90000, "Sony TV",2),
        new Product(2,"Galaxy s", 7000, "Samsung Mobile",1),
        new Product(3,"GalAXY S4", 73000, "Samsung",1),
        new Product(4,"iPhone X", 78000, "Apple Smart Phone",1)
      ]
  }
  getProducts(){
      return this.productsData;
  }
}