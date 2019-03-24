import { Component, OnInit } from '@angular/core';
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
	select: boolean = false;
	constructor(
		private sellingService: SellingService,
		private location: Location,
		public sns: SellingNewService,
	) {
	}

	ngOnInit() {
	}
	onSelect(): void {
		this.select = true;
		this.sns.clear();
	}
	onHide(): void {
		this.select = false;
	}
	onClear(): void {
		this.sns.clearSale();
	}
	onAppend(id: number, client_name: string, sale: Sale[]): void {
		console.log("onAppend",id,client_name,sale);
		this.sellingService.addSale({
			id: id,
			sales: sale,
			client_name: client_name,
		})
		.subscribe(sale => { this.sns.appendSale(sale); });
	}
}
