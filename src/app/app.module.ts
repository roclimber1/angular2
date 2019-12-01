import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { SellingComponent } from './selling/selling.component';
import { ProductComponent } from './product/product.component';
import { SellingAddComponent } from './selling-add/selling-add.component';

import { AppRoutingModule } from './app-routing.module';
import { InMemoryDataService }  from './in-memory-data.service';
import { ProductAddComponent } from './product-add/product-add.component';


@NgModule({
	declarations: [
		AppComponent,
		SellingComponent,
		ProductComponent,
		SellingAddComponent,
		ProductAddComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(
			InMemoryDataService, { dataEncapsulation: false }
		)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
