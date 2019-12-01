import { Injectable } from '@angular/core';

import { SaleLine } from './sale-line';
import { Product } from './product';
import { Sale } from './sale';

@Injectable({
	providedIn: 'root'
})
export class SellingNewService {
	sale: Sale[] = [];
	sales: SaleLine[];
	sale_num: number = 4;
	updated: boolean = false;
	counter: number = 0;
	main_view: boolean = true;

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
		btn_add_product: "Добавить товар",
		add_new_product: "Добавить новый товар",
		detailed: "Подробно",
	};

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
	setSales(sales: SaleLine[]) {
		this.sales = sales;
		console.log("setSales", this.sales, sales);
	}
	appendSale(sale: SaleLine) {
		this.sales.push(sale);
		this.main_view = true;
		this.sale_num++;
	}
}
