import { Component } from '@angular/core';

@Component({
   selector:"sign-up",
   template:`<my-sign title="Quick Sign Up"></my-sign>
             `
})

export class SignupComponent{
    constructor(){
        console.log("SignupComponent  constructor");
    }
}