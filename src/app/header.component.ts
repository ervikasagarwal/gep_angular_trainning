import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { LoginService } from './shared/login.service';



// to tell ng that is a component // pass information about component
@Component({
    // specify tag name for component.
   selector:"app-header",
    // output for component.
   templateUrl:"./header.component.html"


})

export class HeaderComponent{
    appTitle: string;
    constructor(private ls:LoginService){
        console.log("header component constructor");
        this.appTitle = "Angular"; 
        
    }
    isAdminLoggedIn(){
        return this.ls.getIsAdminLoggedIn();
    }

}