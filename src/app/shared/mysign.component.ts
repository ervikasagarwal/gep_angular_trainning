import { Component, Input, Output, EventEmitter, OnDestroy, OnInit, OnChanges } from "@angular/core";

@Component({
    selector:"my-sign",
    template: `
      <h3>{{ title }}</h3>
      <div class="col-sm-10 container">
        <form>
          UserName: <input class="form-control" type="text" placeholder="Enter Username" #frmUser><br>
          Password: <input class="form-control" type="password" placeholder="Enter Password" #frmPwd><br>
          <button type="button" class="btn btn-primary form-control " (click)="handleButtonClick(frmUser.value,frmPwd.value)">{{title}}</button>
        
        </form>
      </div>
    `
})
export class MySignComponent implements OnDestroy, OnInit, OnChanges{ 
    @Input()
    title:string;
    
    @Output()
    myEvent = new EventEmitter();
    

    constructor(){
        console.log("MySignComponent  constructor called", this.title);
    }

    handleButtonClick(username, password){
        console.log("Button is Clicked", username, password);
        this.myEvent.emit({username, password}); // it is emits only one value so we r sending an object
    }
    ngOnDestroy(){
      console.log("my sign destroyed");
    }
    ngOnInit(){
      console.log("my sign onInit", this.title);
    }
    ngOnChanges(){
      console.log("my sign  on Chnages");
    }
}