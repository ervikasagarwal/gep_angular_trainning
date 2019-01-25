import { NgModule } from "@angular/core";
import { RouterModule, Router } from "@angular/router";
import { SigninComponent } from "./signin.component";
import { SignupComponent } from "./signup.component";
import { SharedModule } from "../shared/shared.module";
import { SignoutComponent } from './signout.component';
import { ErrorComponent } from './error.component';

let loginRoutes = [
    { path:"signin", component:SigninComponent },
    { path:"signup", component:SignupComponent },
    { path:"signout", component:SignoutComponent},
    { path:"error", component:ErrorComponent}

]

@NgModule({
    declarations:[ SigninComponent, SignupComponent, SignoutComponent, ErrorComponent],
    imports:[RouterModule.forChild(loginRoutes), SharedModule]
})


export class LoginModule{
    constructor(){
        console.log("login module constructor");
    }
}