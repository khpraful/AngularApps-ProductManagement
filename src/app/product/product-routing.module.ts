import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

const productRoutes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'products/add', component: ProductAddComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'products/update/:id', component: ProductUpdateComponent }

]

@NgModule({
    imports: [RouterModule.forRoot(productRoutes)],
    exports: [RouterModule]

})

export class ProductRoutingModule {

}