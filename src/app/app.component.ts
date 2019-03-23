import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Test Angular 2 application';
	btn_new_title = 'Новая продажа';
	btn_title = 'Список продаж';
	//btn_back_title = 'Добавить';
	main_view = true;

	onBtnClick(val: boolean): void {
		this.main_view = val;
	}
}
