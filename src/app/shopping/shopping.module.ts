import { NgModule } from "@angular/core";
import { ProductsComponent } from './products.component';
import { CartitemsComponent } from './cartitems.component';
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { SearchDataPipe } from "./searchdata.pipe";
import { CategoriesComponent } from './categories.component';
import { RouterModule } from "@angular/router";
import { LoginGuard } from "../shared/login.guard";

@NgModule({  
    declarations: [ProductsComponent, CartitemsComponent, SearchDataPipe, CategoriesComponent],
    imports:[ CommonModule, FormsModule ,RouterModule.forChild([
                                        {path:'categories', component:CategoriesComponent, canActivate:[LoginGuard]}
                                    ])],
    exports:[ CartitemsComponent, ProductsComponent]
})

export class ShoppingModule{
    constructor(){
        console.log("shopping  module constructor");
    }
}