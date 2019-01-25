import { Injectable } from "@angular/core";

@Injectable()
export class LoginService{
    private isAdminLoggedIn = false;
    getIsAdminLoggedIn(){
        return this.isAdminLoggedIn;
    }
    setIsAdminLoggedIn(newVal:boolean){
        this.isAdminLoggedIn = newVal; 
    }
    isValidUser(userName:string, password:string){
        let flag = false;
        if(userName =="admin"){
            flag = true;
        } 
        this.isAdminLoggedIn = flag;
        return flag;
    }
}