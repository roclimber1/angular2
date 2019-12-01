import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';
import { SaleLine } from './sale-line';

@Injectable({
	providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const products = [
			{ id: 1, name: 'Клавиатура', price: 520 },
			{ id: 2, name: 'Мышь', price: 260 },
			{ id: 3, name: 'Монитор', price: 3260 },
			{ id: 4, name: 'Колонки', price: 1700 },
			{ id: 5, name: 'Микрофон', price: 730 },
			{ id: 6, name: 'Веб Камера', price: 990 },
			{ id: 7, name: 'Наушники', price: 643 },
			{ id: 8, name: 'SD Карта', price: 320 },
			{ id: 9, name: 'USB Flash', price: 550 },
			{ id: 10, name: 'Wi-Fi адаптер', price: 460 }
		];
		const clients = [
			"Иванов Борис Федорович",
			"Красильник-Янц Андрей Геннадьевич",
			"Фельдман Иосиф Вольфович"
		];
		const products_list = [products[0], products[2]];
		const sales = [
			{	id: 1,
				sales: [
					{ id: 1, product: products[0], amount: 3 },
					{ id: 2, product: products[7], amount: 1 },
					{ id: 3, product: products[3], amount: 5 },
				],
				client_name: clients[2] },
			{	id: 2,
				sales: [{ id: 1, product: products[1], amount: 5 }],
				client_name: clients[0] },
			{	id: 3,
				sales: [{ id: 1, product: products[2], amount: 1 },
						{ id: 2, product: products[5], amount: 7 }],
				client_name: clients[1] }
		];
		return {products, clients, sales, products_list};
	}

	genId(sales: SaleLine[]): number {
		return sales.length > 0 ? Math.max(...sales.map(sale => sale.id)) + 1 : 1;
	}
}