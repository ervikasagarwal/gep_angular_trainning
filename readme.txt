ionic
electorin 

CB SPA ajaax

need to crate JS peoject

json-server -v 


check node version of angular   execute  "ng -v"  command in project folder

entry point main.ts index.html

to change ng serve --port 5600






// component/modules  class '

ctrl+spacebar to imoprt child in {}

pipe :- param optional
      1. builtin 2.user defined

convert 
pipe for search facility
pipe is also a class

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"searchData" //name of the pipe
})

export class SearchDataPipe implements PipeTransform{
    transform(){
        
    }
}
     
 

interpolation markup {{ expression }} non html data



route-outlet component is available in rOUTERmODULE 


ctrl +p  to open new file in node

data binding => sync b/w model and view
2 way binding applicablee in form // NG PROVIDES PROperty ngModel for two way binding

shared module

ng always load dependencies first

@Input getting data by child => property binding used
@Output sending data by child => event binding used

child data member is availble in parant in tag as a attribute og tag

template ref var #

EventEmitter Class

when we use a component's tag then it creates that component 

ng g c shopping/cartitems --flat --spec=false --module=shopping --inline-style

 ng g c login/error --flat --spec=false --module=login --inline-style  --inline-template

COL-SM MEAN WE ARE TELLING THE MIN SIZE OF DEVICE THAT USER CAN USED

.card .card-deck 

managing State

dependency injection (constructor injection) =>dependency object 

layer in dev => presentsation layer , bl , dl


*ngFor ,ngif in commonModule importinf on shop module



two ways to activate component 
   1. using tag name
  2. using router

each module can have its own routing


diff b/w forChild and forRoot

advantage of # ???
for event binding =>()
for property binding => []