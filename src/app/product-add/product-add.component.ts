import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { SellingService } from '../selling.service';
import { Product } from '../product';
import { SaleLine } from '../sale-line';
import { SellingNewService } from '../selling-new.service';

@Component({
	selector: 'app-product-add',
	templateUrl: './product-add.component.html',
	styleUrls: ['./product-add.component.css', '../app.component.css']
})
export class ProductAddComponent implements OnInit {
	products: Product[];
	productName: string = "";
	constructor(
		private sellingService: SellingService,
		private location: Location,
		public sns: SellingNewService,
	) { }

	ngOnInit() {
		this.getProducts();
	}
	add(name: string, price: number): void {
		name = name.trim();
		if (!name) { return; }
		this.sellingService.addProduct({ name, price } as Product)
			.subscribe(product => { this.products.push(product); });
	}
	getProducts(): void {
		this.sellingService.getProducts()
      		.subscribe(products => this.products = products);
	}
	select(product: Product, amount: number): void {
		this.sns.addSale(product, amount);
	}
}
