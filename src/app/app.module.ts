import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { BrowserModule } from "@angular/platform-browser";
import { LoginModule } from "./login/login.module";
import { ShoppingModule } from "./shopping/shopping.module";
import { HomeComponent, ListComponent, NotFoundComponent } from "./menulink.components";
import { ProductsComponent } from "./shopping/products.component";


let appRoutes = [
    { path:"", component:HomeComponent },     //not use / 
    { path:"list", component:ListComponent,
      children:[
        { path:"", component:ProductsComponent},
        { path:":ctgid", component:ProductsComponent}
      ]
    },
    { path:"**", component:NotFoundComponent} // '**'  represents unmatched path
] 
@NgModule({
   // Register components
   declarations:[ AppComponent , HeaderComponent, HomeComponent, ListComponent, NotFoundComponent],
   //Startup component
   bootstrap: [AppComponent],
   // Specify Module Dependencies
   imports:[ BrowserModule ,  LoginModule, ShoppingModule, RouterModule.forRoot(appRoutes, {useHash:true}), FormsModule]

})

export class AppModule {
    constructor(){
         console.log("app module constructor");
    }
}