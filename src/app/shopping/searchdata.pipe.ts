import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"searchData" //name of the pipe
})

export class SearchDataPipe implements PipeTransform{
    transform(input :any[], searchVar:string , searchColumn:string){
        if(searchVar !== undefined && searchColumn !== undefined && searchVar!= ""){
            return input.filter((e)=>{
                   e[searchColumn].indexOf(searchVar) > -1;
                   console.log(e[searchColumn].indexOf(searchVar));
            })
        } else {
            return input;
        }
    }
}
