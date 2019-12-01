import { Component, OnInit } from '@angular/core';

import { SaleLine } from '../sale-line';
import { SellingService } from '../selling.service';
import { SellingNewService } from '../selling-new.service';

@Component({
	selector: 'app-selling',
	templateUrl: './selling.component.html',
	styleUrls: ['./selling.component.css', '../app.component.css']
})
export class SellingComponent implements OnInit {
	selectedSale: SaleLine;
	table_titles = {
		title: "Список продаж",
		id: "Номер продажи",
		client_name: "Клиент",
		sum: "Сумма",
	};
	btn_new_title = 'Новая продажа';
	btn_title = 'Список продаж';

	constructor(
		private sellingService: SellingService,
		public sellingNewService: SellingNewService,
	) { }

	ngOnInit() {
		this.getSales();
	}

	getSales(): void {
		this.sellingService.getSales()
      		.subscribe(sales => {this.sellingNewService.setSales(sales)});
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
	onBtnClick(val: boolean): void {
		this.sellingNewService.main_view = val;
		if (val) {
			console.log("getSales", val);
			this.getSales();
		}
	}
}
