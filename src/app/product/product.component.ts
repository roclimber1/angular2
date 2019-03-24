import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { SaleLine } from '../sale-line';
import { SellingService } from '../selling.service';
import { SellingNewService } from '../selling-new.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css', '../app.component.css']
})
export class ProductComponent implements OnInit {
	@Input() sale: SaleLine;
	
	constructor(
		private sellingService: SellingService,
		private location: Location,
		public sns: SellingNewService,
	) { }

	ngOnInit() {
	}
	save(): void {
		this.sellingService.updateSale(this.sale);
	}
}
