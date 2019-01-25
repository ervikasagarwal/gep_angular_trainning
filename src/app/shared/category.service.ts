import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Category } from "../models/category.model"
@Injectable()
export class CategoryService{
    private restUrl = "http://localhost:3000/wscategories";
    constructor( private http:HttpClient){}
    getCategories(){  /// return type of http is Observable
        return this.http.get<Category[]>(this.restUrl)
    }
    addCategory(newCtg:Category){
        return this.http.post<Category>(this.restUrl,newCtg);
    }
    deleteCategory(id:number){
       return this.http.delete(this.restUrl+"/"+id);
    }
    updateCategory(modifiedctg:Category){
        return this.http.put<Category>(this.restUrl+"/"+modifiedctg.id, modifiedctg);
    }
}