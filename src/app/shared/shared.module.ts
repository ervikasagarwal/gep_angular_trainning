import { NgModule} from '@angular/core';
import { MySignComponent } from './mysign.component';
import { ProductService } from './product.service';
import { CartService } from './cart.service';
import { CategoryService } from './category.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import { LoginGuard } from './login.guard';

@NgModule({
    declarations:[ MySignComponent],

    imports:[HttpClientModule],
    exports:[ MySignComponent],
    providers:[ProductService, CartService, CategoryService, LoginService, LoginGuard]
})


export class SharedModule{
    constructor(){
        console.log("SharedModule constructor");
    }
}