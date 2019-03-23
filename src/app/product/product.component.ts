import { Component, OnInit, Input } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SaleLine } from '../sale-line';
import { SellingService } from '../selling.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css', '../app.component.css']
})
export class ProductComponent implements OnInit { 
	//sale: SaleLine;
	@Input() sale: SaleLine;
	
	constructor(
		//private route: ActivatedRoute,
		private sellingService: SellingService,
		private location: Location
	) { }

	ngOnInit() {
		//this.getSale();
	}
	/*getSale(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.sellingService.getSale(id)
      		.subscribe(sale => this.sale = sale);
	}*/
 	goBack(): void {
		//this.location.back();
	}
	save(): void {
		this.sellingService.updateSale(this.sale);
			//.subscribe(() => this.goBack());
	}
}
