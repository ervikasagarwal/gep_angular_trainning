import { Component } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';



// to tell ng that is a component // pass information about component
@Component({
   selector:"sign-in",
    // output for component.
   template:`
             Welcome {{ userName }}
             <my-sign [title]="signInHeading"  (myEvent)="handleMyEvent($event)"></my-sign>
             `
})

export class SigninComponent{
    userName = "Guest";
    signInHeading = "Login View"
    constructor(private lsvc: LoginService, private router:Router){
        console.log("SigninComponent  constructor called");


    }
    handleMyEvent(obj){
        this.userName = obj.username;
        if(this.lsvc.isValidUser(obj.usr,obj.pwd)){
            this.router.navigate(['/categories']);
        } else{
            this.router.navigate(['/error']);

        }
    }
}