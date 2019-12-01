import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SellingComponent } from './selling/selling.component';
import { ProductComponent } from './product/product.component';
import { SellingAddComponent } from './selling-add/selling-add.component';
import { ProductAddComponent } from './product-add/product-add.component';

const routes: Routes = [
	{ path: 'selling', component: SellingComponent },
	{ path: 'product/:id', component: ProductComponent },
	{ path: 'selling-add', component: SellingAddComponent },
	{ path: 'product-add', component: ProductAddComponent },
	{ path: 'selling-add/:id', component: SellingAddComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
