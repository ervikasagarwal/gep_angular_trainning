import { Component } from '@angular/core';



// to tell ng that is a component // pass information about component
@Component({
    // specify tag name for component.
   selector:"app-root",
    // output for component.
   template:`<app-header>loading ..........</app-header>
             <router-outlet></router-outlet>
             `
})

export class AppComponent{
    constructor(){
        console.log("app component constructor");
    }
}