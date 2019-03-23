import { Component, OnInit } from '@angular/core';

import { SaleLine } from '../sale-line';
import { SellingService } from '../selling.service';

@Component({
	selector: 'app-selling',
	templateUrl: './selling.component.html',
	styleUrls: ['./selling.component.css', '../app.component.css']
})
export class SellingComponent implements OnInit {
	sales: SaleLine[];
	selectedSale: SaleLine;
	table_titles = {
		title: "Список продаж",
		id: "Номер продажи",
		client_name: "Клиент",
		sum: "Сумма",
	};

	constructor(private sellingService: SellingService) { }

	ngOnInit() {
		this.getSales();
	}

	getSales(): void {
		this.sellingService.getSales()
      		.subscribe(sales => this.sales = sales);
	}
	onSelect(sale: SaleLine): void {
		this.selectedSale = sale;
	}
	hide(): void {
		this.selectedSale = undefined;
	}
	getSum(sale: SaleLine): number {
		var sum = 0;
		for(var i = 0; i < sale.sales.length; i++) {
			sum += sale.sales[i].amount * sale.sales[i].product.price;
		}
		return sum;
	}
}
