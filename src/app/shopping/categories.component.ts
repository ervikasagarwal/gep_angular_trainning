import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from '../shared/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: []
})
export class CategoriesComponent implements OnInit {
  categories:Category[] = [];
  frmCtg = new Category(null,null);

  constructor(private ctgsvc:CategoryService) { }

  ngOnInit() {
    this.ctgsvc.getCategories().subscribe(
      (data)=>{ console.log("get success",data);
              this.categories = data;
              console.log("category",this.categories );
      }
    );
  }
  

  
  add(){
    this.ctgsvc.addCategory(this.frmCtg).subscribe(
                    (data)=>{ console.log("add success",data);
                               this.categories.push(data); 
                    },
                    (err)=>{ console.log("add Error",err) }
                 )
  }
  delete(id:number){
    this.ctgsvc.deleteCategory(id).subscribe(
      (data)=>{
         console.log("delete Success");
         let idx = this.categories.findIndex((e)=> e.id == id);
         this.categories.splice(idx,1);
      },
      (err)=>{
        console.log("delete err");
      }
    )
  }

  edit(selectedCtg: Category){
    //this.frmCtg = selectedCtg;
    Object.assign(this.frmCtg, selectedCtg);
  }
  update(){
     this.ctgsvc.updateCategory(this.frmCtg).subscribe(
       (data)=>{
         console.log("updated");
         let idx = this.categories.findIndex((e)=> e.id == data.id);
         this.categories[idx] = data;
       },
       (err)=>{
         console.log("update error ");
       }

     )
  }
}
