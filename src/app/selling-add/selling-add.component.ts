import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../product';
import { Sale } from '../sale';
import { SellingService } from '../selling.service';
import { SellingNewService } from '../selling-new.service';

@Component({
	selector: 'app-selling-add',
	templateUrl: './selling-add.component.html',
	styleUrls: ['./selling-add.component.css', '../app.component.css']
})
export class SellingAddComponent implements OnInit {
	//products_list: Product[];
	select: boolean = false;
	//counter: number = 0;
	table_titles = {
		title: "Создание продажи",
		id: "Номер продажи",
		tbl_name: "Список продаж",
		tbl_id: "№",
		client_name: "Клиент",
		product_name: "Название товара",
		amount: "Количество",
		price: "Цена (за единицу)",
		price_full: "Цена (за все)",
		sum: "Сумма",
		btn_select: "Выбрать товар",
		btn_add: "Добавить продажу",
		btn_clear: "Очистить",
	};
	constructor(
		private route: ActivatedRoute,
		private sellingService: SellingService,
		private location: Location,
		public sellingNewService: SellingNewService,
	) {
		//this.counter = 0;
		//this.select = false;
	}

	ngOnInit() {
		//this.getProducts();
	}
	/*getProducts(): void {
		console.log("getProducts");
		this.sellingService.getProductsList()
			.subscribe(products_list => this.products_list = products_list);
	}*/
	onSelect(): void {
		this.select = true;
		this.sellingNewService.clear();
	}
	onHide(): void {
		this.select = false;
	}
	onClear(): void {
		this.sellingNewService.clearSale();
	}
	onAppend(id: number, client_name: string, sale: Sale[]): void {
		this.sellingService.addSale({
			id: id,
			sales: sale,
			client_name: client_name,
		});
	}
}
