import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { SaleLine } from './sale-line';
import { Product } from './product';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
	providedIn: 'root'
})
export class SellingService {
	private salesUrl = 'api/sales';
	private productsUrl = 'api/products';
	//private salesUrl = 'api/sales';
	constructor(private http: HttpClient) {
		console.log("getProducts", this.getProducts());
		console.log("getSales", this.getSales());
	}

	getProducts(): Observable<Product[]> {
		return this.http.get<Product[]>(this.productsUrl)
			.pipe(catchError(this.handleError<Product[]>('getProducts', [])));
	}
	getProduct(id: number): Observable<Product> {
		const url = `${this.productsUrl}/${id}`;
		return this.http.get<Product>(url).pipe(catchError(this.handleError<Product>(`getProduct id=${id}`)));
	}
	addProduct(product: Product): Observable<Product> {
		return this.http.post<Product>(this.productsUrl, product, httpOptions).pipe(catchError(this.handleError<Product>('addProduct')));
	}

	getSales(): Observable<SaleLine[]> {
		return this.http.get<SaleLine[]>(this.salesUrl)
			.pipe(catchError(this.handleError<SaleLine[]>('getSales', [])));
	}
	getSale(id: number): Observable<SaleLine> {
		const url = `${this.salesUrl}/${id}`;
		return this.http.get<SaleLine>(url).pipe(catchError(this.handleError<SaleLine>(`getSale id=${id}`)));
	}
	updateSale(sale: SaleLine): Observable<any> {
		return this.http.put(this.salesUrl, sale, httpOptions).pipe(catchError(this.handleError<any>('updateSale')));
	}
	addSale(sale: SaleLine): Observable<SaleLine> {
		console.log("addSale");
		return this.http.post<SaleLine>(this.salesUrl, sale, httpOptions).pipe(catchError(this.handleError<SaleLine>('addSale')));
	}

	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			return of(result as T);
		};
	}
}
