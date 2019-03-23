import { Injectable } from '@angular/core';

import { SaleLine } from './sale-line';
import { Product } from './product';
import { Sale } from './sale';

@Injectable({
	providedIn: 'root'
})
export class SellingNewService {
	sale: Sale[] = [];
	updated: boolean = false;
	counter: number = 0;
	//sale: SaleLine[] = [];

	addSale(product: Product, amount: number) {
		this.counter++;
		this.sale.push({
			id: this.counter,
			product: product,
			amount: amount,
		});
		this.updated = true;
	}

	clearSale() {
		this.sale = [];
		//this.updated = true;
		this.counter = 0;
	}

	clear() {
		this.updated = false;
		this.counter = 0;
	}
	getSum(): number {
		var sum = 0;
		if (!this.sale.length) {
			return 0;
		}
		for(var i = 0; i < this.sale.length; i++) {
			sum += this.sale[i].product.price * this.sale[i].amount;
		}
		return sum;
	}
}
