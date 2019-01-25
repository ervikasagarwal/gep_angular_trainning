import { Component } from '@angular/core';
import { CategoryService } from './shared/category.service';
import { Category } from './models/category.model';

// to tell ng that is a component // pass information about component

@Component({
  // selector:"app-home",
   template:`<h1>Home</h1>
     <h2>{{content}}</h2>
     property binding
     <h3 [innerHTML]="content"></h3>
     <h2>Count Value is {{ count }}</h2>
     <button class="btn btn-success" (click)="incrementCount()">Increase</button>
     <input type="text" value="count">
     <input type="number" value="{{count}}">
     <input type="number" [value]="count">
     <input type="number" [(ngModel)]="count">
   `
})
export class HomeComponent{
    content: string = "<u>sample Home Content</u>"
    count = 0 ;
    incrementCount(){
        this.count++;
    }
    constructor(){
        console.log("header component constructor");
    }
}

@Component({
   //selector:"app-list",
   template:`<h3>List of Component</h3>
            <div class="row">
             <div class="col-sm-2 card">
                <div class="card-header bg-primary">
                    <b> Catagories</b>  
                </div>
                <div class="card-body">
                   <ul class="list-group">
                     <li class="list-group-item" *ngFor="let link of ctgLinks">
                      <a [routerLink]="link.id">{{ link.name}}</a>
                     </li>
                   </ul>
                </div>  
             </div> 
             <div class="col-sm-5">
            <!--  <app-products></app-products> -->
              <router-outlet></router-outlet>
             </div>
             <div class="col-sm-5 card">
               <app-cartitems></app-cartitems>
               
             </div>
            </div>
   `
})


export class ListComponent{
    ctgLinks : Category[] = [];
    constructor( private ctgsvc:CategoryService){

        console.log("ListComponent constructor");
    }
    ngOnInit(){
        this.ctgsvc.getCategories().subscribe(
            (data)=>{
                console.log("success",data);
                this.ctgLinks = data;
            },(err)=>{
                console.log("Error",err);
            }
        )
    }
}

@Component({
  //  selector:"app-not-found",
   template:"<h1>404..view not available</h1>"
})

export class NotFoundComponent{
    constructor(){
        console.log("NotFoundComponent constructor");
    }
}