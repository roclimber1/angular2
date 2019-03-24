(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _selling_selling_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selling/selling.component */ "./src/app/selling/selling.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _selling_add_selling_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selling-add/selling-add.component */ "./src/app/selling-add/selling-add.component.ts");
/* harmony import */ var _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-add/product-add.component */ "./src/app/product-add/product-add.component.ts");







var routes = [
    { path: 'selling', component: _selling_selling_component__WEBPACK_IMPORTED_MODULE_3__["SellingComponent"] },
    { path: 'product/:id', component: _product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"] },
    { path: 'selling-add', component: _selling_add_selling_add_component__WEBPACK_IMPORTED_MODULE_5__["SellingAddComponent"] },
    { path: 'product-add', component: _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_6__["ProductAddComponent"] },
    { path: 'selling-add/:id', component: _selling_add_selling_add_component__WEBPACK_IMPORTED_MODULE_5__["SellingAddComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, h1, h2, a, span, div, ul, p {\r\n\tfont-family: Verdana;\r\n}\r\nh1 {\r\n\tcolor: #369;\r\n\tfont-size: 250%;\r\n}\r\nul {\r\n\tlist-style-type: none;\r\n}\r\nli span {\r\n\tpadding: 10px;\r\n\tbackground: rgba(123,123,123,0.1);\r\n\tmargin: 6px;\r\n\tdisplay: inline-table;\r\n}\r\nli.title span {\r\n\tbackground: rgba(11,11,11,0.2);\r\n}\r\nul.sale li span {\r\n\tbackground: rgba(233,233,233,0.3);\r\n\tmargin: 2px;\r\n}\r\nul.sale li span:nth-child(odd) {\r\n\tmargin: 2px;\r\n\tbackground: rgba(123,123,255,0.3);\r\n}\r\n.button {\r\n\tfont-family: Verdana;\r\n\tfont-weight: bold;\r\n\tfont-size: 15px;\r\n\tcolor: #333;\r\n\tbackground: rgba(123,123,255,0.6);\r\n\tborder: none;\r\n\tpadding: 10px;\r\n\tmargin: 15px 3px 15px;\r\n\twidth: -webkit-fit-content;\r\n\twidth: -moz-fit-content;\r\n\twidth: fit-content;\r\n\tcursor: pointer;\r\n\tdisplay: inline-table;\r\n}\r\ninput {\r\n\tfont-family: Verdana;\r\n\tfont-weight: bold;\r\n\tfont-size: 15px;\r\n\tcolor: #333;\r\n\tborder: none;\r\n\tpadding: 10px;\r\n\tbox-shadow: 1px 1px 7px rgba(0, 0, 0, 0.4) inset;\r\n\tmargin: 5px;\r\n\tdisplay: inline-table;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxvQkFBb0I7QUFDckI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxxQkFBcUI7QUFDdEI7QUFDQTtDQUNDLGFBQWE7Q0FDYixpQ0FBaUM7Q0FDakMsV0FBVztDQUNYLHFCQUFxQjtBQUN0QjtBQUNBO0NBQ0MsOEJBQThCO0FBQy9CO0FBQ0E7Q0FDQyxpQ0FBaUM7Q0FDakMsV0FBVztBQUNaO0FBQUM7Q0FDQSxXQUFXO0NBQ1gsaUNBQWlDO0FBQ2xDO0FBQ0E7Q0FDQyxvQkFBb0I7Q0FDcEIsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixXQUFXO0NBQ1gsaUNBQWlDO0NBQ2pDLFlBQVk7Q0FDWixhQUFhO0NBQ2IscUJBQXFCO0NBQ3JCLDBCQUFrQjtDQUFsQix1QkFBa0I7Q0FBbEIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixxQkFBcUI7QUFDdEI7QUFDQTtDQUNDLG9CQUFvQjtDQUNwQixpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLFdBQVc7Q0FDWCxZQUFZO0NBQ1osYUFBYTtDQUNiLGdEQUFnRDtDQUNoRCxXQUFXO0NBQ1gscUJBQXFCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LCBoMSwgaDIsIGEsIHNwYW4sIGRpdiwgdWwsIHAge1xyXG5cdGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xyXG59XHJcbmgxIHtcclxuXHRjb2xvcjogIzM2OTtcclxuXHRmb250LXNpemU6IDI1MCU7XHJcbn1cclxudWwge1xyXG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5saSBzcGFuIHtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMTIzLDEyMywxMjMsMC4xKTtcclxuXHRtYXJnaW46IDZweDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbn1cclxubGkudGl0bGUgc3BhbiB7XHJcblx0YmFja2dyb3VuZDogcmdiYSgxMSwxMSwxMSwwLjIpO1xyXG59XHJcbnVsLnNhbGUgbGkgc3BhbiB7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyMzMsMjMzLDIzMywwLjMpO1xyXG5cdG1hcmdpbjogMnB4O1xyXG59dWwuc2FsZSBsaSBzcGFuOm50aC1jaGlsZChvZGQpIHtcclxuXHRtYXJnaW46IDJweDtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDEyMywxMjMsMjU1LDAuMyk7XHJcbn1cclxuLmJ1dHRvbiB7XHJcblx0Zm9udC1mYW1pbHk6IFZlcmRhbmE7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdGNvbG9yOiAjMzMzO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMTIzLDEyMywyNTUsMC42KTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRtYXJnaW46IDE1cHggM3B4IDE1cHg7XHJcblx0d2lkdGg6IGZpdC1jb250ZW50O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbn1cclxuaW5wdXQge1xyXG5cdGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRjb2xvcjogIzMzMztcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRib3gtc2hhZG93OiAxcHggMXB4IDdweCByZ2JhKDAsIDAsIDAsIDAuNCkgaW5zZXQ7XHJcblx0bWFyZ2luOiA1cHg7XHJcblx0ZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\n<app-selling></app-selling>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Test Angular 2 application';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _selling_selling_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selling/selling.component */ "./src/app/selling/selling.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _selling_add_selling_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selling-add/selling-add.component */ "./src/app/selling-add/selling-add.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product-add/product-add.component */ "./src/app/product-add/product-add.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _selling_selling_component__WEBPACK_IMPORTED_MODULE_7__["SellingComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"],
                _selling_add_selling_add_component__WEBPACK_IMPORTED_MODULE_9__["SellingAddComponent"],
                _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_12__["ProductAddComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_11__["InMemoryDataService"], { dataEncapsulation: false })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var products = [
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
        var clients = [
            "Иванов Борис Федорович",
            "Красильник-Янц Андрей Геннадьевич",
            "Фельдман Иосиф Вольфович"
        ];
        var products_list = [products[0], products[2]];
        var sales = [
            { id: 1,
                sales: [
                    { id: 1, product: products[0], amount: 3 },
                    { id: 2, product: products[7], amount: 1 },
                    { id: 3, product: products[3], amount: 5 },
                ],
                client_name: clients[2] },
            { id: 2,
                sales: [{ id: 1, product: products[1], amount: 5 }],
                client_name: clients[0] },
            { id: 3,
                sales: [{ id: 1, product: products[2], amount: 1 },
                    { id: 2, product: products[5], amount: 7 }],
                client_name: clients[1] }
        ];
        return { products: products, clients: clients, sales: sales, products_list: products_list };
    };
    InMemoryDataService.prototype.genId = function (sales) {
        return sales.length > 0 ? Math.max.apply(Math, sales.map(function (sale) { return sale.id; })) + 1 : 1;
    };
    InMemoryDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], InMemoryDataService);
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/product-add/product-add.component.css":
/*!*******************************************************!*\
  !*** ./src/app/product-add/product-add.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtYWRkL3Byb2R1Y3QtYWRkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/product-add/product-add.component.html":
/*!********************************************************!*\
  !*** ./src/app/product-add/product-add.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"products\">\n\t<li class=\"title\">\n\t\t<div>\n\t\t\t<span>#</span>\n\t\t\t<span>{{sns.table_titles.product_name}}</span>\n\t\t\t<span>{{sns.table_titles.price}}</span>\n\t\t\t<span>{{sns.table_titles.amount}}</span>\n\t\t</div>\n\t</li>\n\t<li *ngFor=\"let product of products\">\n\t\t<div>\n\t\t\t<span>{{product.id}}</span>\n\t\t\t<span>{{product.name}}</span>\n\t\t\t<span>{{product.price}}</span>\n\t\t\t<input #product_amount type=\"number\" min=\"1\" max=\"99\" value=\"1\">\n\t\t\t<div class=\"button\" (click)=\"select(product, product_amount.value); product_amount.value='1'\">+</div>\n\t\t</div>\n\t</li>\n</ul>\n<div>{{sns.table_titles.add_new_product}}</div>\n<div>\n\t<label>{{sns.table_titles.product_name}}:\n\t\t<input #product_name placeholder=\"USB-кабель\" value=\"USB-кабель\"/>\n\t</label>\n</div>\n<div>\n\t<label>{{sns.table_titles.price}}:\n\t\t<input #product_price type=\"number\" min=\"0\" max=\"99999\" value=\"150\"placeholder=\"150\">\n\t</label>\n</div>\n<div (click)=\"add(product_name.value, product_price.value); product_name.value=''; product_price.value=''\" class=\"button\">{{sns.table_titles.btn_add_product}}</div>"

/***/ }),

/***/ "./src/app/product-add/product-add.component.ts":
/*!******************************************************!*\
  !*** ./src/app/product-add/product-add.component.ts ***!
  \******************************************************/
/*! exports provided: ProductAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddComponent", function() { return ProductAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _selling_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selling.service */ "./src/app/selling.service.ts");
/* harmony import */ var _selling_new_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../selling-new.service */ "./src/app/selling-new.service.ts");





var ProductAddComponent = /** @class */ (function () {
    function ProductAddComponent(sellingService, location, sns) {
        this.sellingService = sellingService;
        this.location = location;
        this.sns = sns;
        this.productName = "";
    }
    ProductAddComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductAddComponent.prototype.add = function (name, price) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.sellingService.addProduct({ name: name, price: price })
            .subscribe(function (product) { _this.products.push(product); });
    };
    ProductAddComponent.prototype.getProducts = function () {
        var _this = this;
        this.sellingService.getProducts()
            .subscribe(function (products) { return _this.products = products; });
    };
    ProductAddComponent.prototype.select = function (product, amount) {
        this.sns.addSale(product, amount);
    };
    ProductAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-add',
            template: __webpack_require__(/*! ./product-add.component.html */ "./src/app/product-add/product-add.component.html"),
            styles: [__webpack_require__(/*! ./product-add.component.css */ "./src/app/product-add/product-add.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_selling_service__WEBPACK_IMPORTED_MODULE_3__["SellingService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _selling_new_service__WEBPACK_IMPORTED_MODULE_4__["SellingNewService"]])
    ], ProductAddComponent);
    return ProductAddComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"sale\">\n\t<h2>{{sns.table_titles.detailed}}</h2>\n\t<ul class=\"sale\">\n\t\t<li>\n\t\t\t<div>\n\t\t\t\t<span>{{sns.table_titles.id}}</span>\n\t\t\t\t<span>{{sale.id}}</span>\n\t\t\t</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<div>\n\t\t\t\t<span>{{sns.table_titles.client_name}}</span>\n\t\t\t\t<span>{{sale.client_name}}</span>\n\t\t\t</div>\n\t\t</li>\n\t</ul>\n\t<ul>\n\t\t<li class=\"title\">\n\t\t\t<div>\n\t\t\t\t<span>#</span>\n\t\t\t\t<span>{{sns.table_titles.product_name}}</span>\n\t\t\t\t<span>{{sns.table_titles.amount}}</span>\n\t\t\t\t<span>{{sns.table_titles.price}}</span>\n\t\t\t\t<span>{{sns.table_titles.price_full}}</span>\n\t\t\t</div>\n\t\t</li>\n\t\t<div *ngFor=\"let sale_ of sale.sales\">\n\t\t\t<li>\n\t\t\t\t<div>\n\t\t\t\t\t<span>{{sale_.id}}</span>\n\t\t\t\t\t<span>{{sale_.product.name}}</span>\n\t\t\t\t\t<span>{{sale_.amount}}</span>\n\t\t\t\t\t<span>{{sale_.product.price}}</span>\n\t\t\t\t\t<span>{{sale_.product.price * sale_.amount}}</span>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</div>\n\t</ul>\n</div>"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sale_line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sale-line */ "./src/app/sale-line.ts");
/* harmony import */ var _selling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../selling.service */ "./src/app/selling.service.ts");
/* harmony import */ var _selling_new_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../selling-new.service */ "./src/app/selling-new.service.ts");






var ProductComponent = /** @class */ (function () {
    function ProductComponent(sellingService, location, sns) {
        this.sellingService = sellingService;
        this.location = location;
        this.sns = sns;
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.save = function () {
        this.sellingService.updateSale(this.sale);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sale_line__WEBPACK_IMPORTED_MODULE_3__["SaleLine"])
    ], ProductComponent.prototype, "sale", void 0);
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_selling_service__WEBPACK_IMPORTED_MODULE_4__["SellingService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _selling_new_service__WEBPACK_IMPORTED_MODULE_5__["SellingNewService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/sale-line.ts":
/*!******************************!*\
  !*** ./src/app/sale-line.ts ***!
  \******************************/
/*! exports provided: SaleLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleLine", function() { return SaleLine; });
var SaleLine = /** @class */ (function () {
    function SaleLine() {
    }
    return SaleLine;
}());



/***/ }),

/***/ "./src/app/selling-add/selling-add.component.css":
/*!*******************************************************!*\
  !*** ./src/app/selling-add/selling-add.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxpbmctYWRkL3NlbGxpbmctYWRkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/selling-add/selling-add.component.html":
/*!********************************************************!*\
  !*** ./src/app/selling-add/selling-add.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{sns.table_titles.title}}</h2>\n<div>\n\t<label>{{sns.table_titles.id}}\n\t\t<!--<input #sale_id placeholder=\"4\" value=\"4\"/>-->\n\t\t<input #sale_id placeholder=\"{{sns.sale_num}}\" type=\"number\" min=\"1\" max=\"99999\" value=\"{{sns.sale_num}}\">\n\t</label>\n</div>\n<div>\n\t<label>{{sns.table_titles.client_name}}\n\t\t<input #sale_client placeholder=\"Борисов Петр Яковлевич\" value=\"Борисов Петр Яковлевич\"/>\n\t</label>\n</div>\n<h2>{{sns.table_titles.tbl_name}}</h2>\n<ul class=\"sales\">\n\t<div *ngIf=\"sns.sale.length\">\n\t\t<li class=\"title\">\n\t\t\t<div>\n\t\t\t\t<span>{{sns.table_titles.tbl_id}}</span>\n\t\t\t\t<span>{{sns.table_titles.product_name}}</span>\n\t\t\t\t<span>{{sns.table_titles.amount}}</span>\n\t\t\t\t<span>{{sns.table_titles.price}}</span>\n\t\t\t\t<span>{{sns.table_titles.price_full}}</span>\n\t\t\t</div>\n\t\t</li>\n\t\t<li *ngFor=\"let sale of sns.sale; index as i\">\n\t\t\t<div>\n\t\t\t\t<span>{{sale.id}}</span>\n\t\t\t\t<span>{{sale.product.name}}</span>\n\t\t\t\t<span>{{sale.amount}}</span>\n\t\t\t\t<span>{{sale.product.price}}</span>\n\t\t\t\t<span>{{sale.product.price * sale.amount}}</span>\n\t\t\t</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<div><span>{{sns.table_titles.sum}}</span><span>{{sns.getSum()}}</span></div>\n\t\t</li>\n\t</div>\n</ul>\n<div class=\"button\" (click)=\"onSelect()\">{{sns.table_titles.btn_select}}</div>\n<div *ngIf=\"select\">\n\t<app-product-add></app-product-add>\n\t<div (click)=\"onHide()\" class=\"button\">Скрыть</div>\n</div>\n<br><div class=\"button\" (click)=\"onAppend(sale_id.value, sale_client.value, sns.sale); sale_client.value=''; sale_id.value=''; onClear()\">{{sns.table_titles.btn_add}}</div>\n<div class=\"button\" (click)=\"onClear()\">{{sns.table_titles.btn_clear}}</div>"

/***/ }),

/***/ "./src/app/selling-add/selling-add.component.ts":
/*!******************************************************!*\
  !*** ./src/app/selling-add/selling-add.component.ts ***!
  \******************************************************/
/*! exports provided: SellingAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellingAddComponent", function() { return SellingAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _selling_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selling.service */ "./src/app/selling.service.ts");
/* harmony import */ var _selling_new_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../selling-new.service */ "./src/app/selling-new.service.ts");





var SellingAddComponent = /** @class */ (function () {
    function SellingAddComponent(sellingService, location, sns) {
        this.sellingService = sellingService;
        this.location = location;
        this.sns = sns;
        this.select = false;
    }
    SellingAddComponent.prototype.ngOnInit = function () {
    };
    SellingAddComponent.prototype.onSelect = function () {
        this.select = true;
        this.sns.clear();
    };
    SellingAddComponent.prototype.onHide = function () {
        this.select = false;
    };
    SellingAddComponent.prototype.onClear = function () {
        this.sns.clearSale();
    };
    SellingAddComponent.prototype.onAppend = function (id, client_name, sale) {
        var _this = this;
        console.log("onAppend", id, client_name, sale);
        this.sellingService.addSale({
            id: id,
            sales: sale,
            client_name: client_name,
        })
            .subscribe(function (sale) { _this.sns.appendSale(sale); });
    };
    SellingAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-selling-add',
            template: __webpack_require__(/*! ./selling-add.component.html */ "./src/app/selling-add/selling-add.component.html"),
            styles: [__webpack_require__(/*! ./selling-add.component.css */ "./src/app/selling-add/selling-add.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_selling_service__WEBPACK_IMPORTED_MODULE_3__["SellingService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _selling_new_service__WEBPACK_IMPORTED_MODULE_4__["SellingNewService"]])
    ], SellingAddComponent);
    return SellingAddComponent;
}());



/***/ }),

/***/ "./src/app/selling-new.service.ts":
/*!****************************************!*\
  !*** ./src/app/selling-new.service.ts ***!
  \****************************************/
/*! exports provided: SellingNewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellingNewService", function() { return SellingNewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SellingNewService = /** @class */ (function () {
    function SellingNewService() {
        this.sale = [];
        this.sale_num = 4;
        this.updated = false;
        this.counter = 0;
        this.main_view = true;
        this.table_titles = {
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
    }
    SellingNewService.prototype.addSale = function (product, amount) {
        this.counter++;
        this.sale.push({
            id: this.counter,
            product: product,
            amount: amount,
        });
        this.updated = true;
    };
    SellingNewService.prototype.clearSale = function () {
        this.sale = [];
        this.counter = 0;
    };
    SellingNewService.prototype.clear = function () {
        this.updated = false;
        this.counter = 0;
    };
    SellingNewService.prototype.getSum = function () {
        var sum = 0;
        if (!this.sale.length) {
            return 0;
        }
        for (var i = 0; i < this.sale.length; i++) {
            sum += this.sale[i].product.price * this.sale[i].amount;
        }
        return sum;
    };
    SellingNewService.prototype.setSales = function (sales) {
        this.sales = sales;
        console.log("setSales", this.sales, sales);
    };
    SellingNewService.prototype.appendSale = function (sale) {
        this.sales.push(sale);
        this.main_view = true;
        this.sale_num++;
    };
    SellingNewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SellingNewService);
    return SellingNewService;
}());



/***/ }),

/***/ "./src/app/selling.service.ts":
/*!************************************!*\
  !*** ./src/app/selling.service.ts ***!
  \************************************/
/*! exports provided: SellingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellingService", function() { return SellingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var SellingService = /** @class */ (function () {
    function SellingService(http) {
        this.http = http;
        this.salesUrl = 'api/sales';
        this.productsUrl = 'api/products';
        console.log("getProducts", this.getProducts());
        console.log("getSales", this.getSales());
    }
    SellingService.prototype.getProducts = function () {
        return this.http.get(this.productsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getProducts', [])));
    };
    SellingService.prototype.getProduct = function (id) {
        var url = this.productsUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getProduct id=" + id)));
    };
    SellingService.prototype.addProduct = function (product) {
        return this.http.post(this.productsUrl, product, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addProduct')));
    };
    SellingService.prototype.getSales = function () {
        return this.http.get(this.salesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getSales', [])));
    };
    SellingService.prototype.getSale = function (id) {
        var url = this.salesUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getSale id=" + id)));
    };
    SellingService.prototype.updateSale = function (sale) {
        return this.http.put(this.salesUrl, sale, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateSale')));
    };
    SellingService.prototype.addSale = function (sale) {
        console.log("addSale", sale);
        return this.http.post(this.salesUrl, sale, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addSale')));
    };
    SellingService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    SellingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SellingService);
    return SellingService;
}());



/***/ }),

/***/ "./src/app/selling/selling.component.css":
/*!***********************************************!*\
  !*** ./src/app/selling/selling.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li.title {\r\n\tcursor: default;\r\n}li.title:hover {\r\n\tbackground: unset;\r\n}li {\r\n\tcursor: pointer;\r\n}li.selected, li:hover {\r\n\tbackground: rgba(123,123,123,0.1);\r\n\twidth: -webkit-fit-content;\r\n\twidth: -moz-fit-content;\r\n\twidth: fit-content;\r\n}li.selected {\r\n\tbackground: rgba(123,123,123,0.2);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGluZy9zZWxsaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxlQUFlO0FBQ2hCLENBQUM7Q0FDQSxpQkFBaUI7QUFDbEIsQ0FDQTtDQUNDLGVBQWU7QUFDaEIsQ0FDQTtDQUNDLGlDQUFpQztDQUNqQywwQkFBa0I7Q0FBbEIsdUJBQWtCO0NBQWxCLGtCQUFrQjtBQUNuQixDQUNBO0NBQ0MsaUNBQWlDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvc2VsbGluZy9zZWxsaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaS50aXRsZSB7XHJcblx0Y3Vyc29yOiBkZWZhdWx0O1xyXG59bGkudGl0bGU6aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6IHVuc2V0O1xyXG59XHJcbmxpIHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxubGkuc2VsZWN0ZWQsIGxpOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDEyMywxMjMsMTIzLDAuMSk7XHJcblx0d2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcbmxpLnNlbGVjdGVkIHtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDEyMywxMjMsMTIzLDAuMik7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/selling/selling.component.html":
/*!************************************************!*\
  !*** ./src/app/selling/selling.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button\" (click)=\"onBtnClick(true)\">{{btn_title}}</div>\n<div class=\"button\" (click)=\"onBtnClick(false)\">{{btn_new_title}}</div>\n\n<div *ngIf=\"sellingNewService.main_view\">\n\t<h2>{{table_titles.title}}</h2>\n\t<ul class=\"sales\">\n\t\t<li class=\"title\">\n\t\t\t<div>\n\t\t\t\t<span>{{table_titles.id}}</span>\n\t\t\t\t<span>{{table_titles.client_name}}</span>\n\t\t\t\t<span>{{table_titles.sum}}</span>\n\t\t\t</div>\n\t\t</li>\n\t\t<li *ngFor=\"let sale of sellingNewService.sales\" [class.selected] = \"sale === selectedSale\" (click)=\"onSelect(sale)\">\n\t\t\t<div>\n\t\t\t\t<span>{{sale.id}}</span>\n\t\t\t\t<span>{{sale.client_name}}</span>\n\t\t\t\t<span>{{getSum(sale)}}</span>\n\t\t\t</div>\n\t\t</li>\n\t</ul>\n\n\t<app-product [sale]=\"selectedSale\"></app-product>\n\t<div *ngIf=\"selectedSale\">\n\t\t<div (click)=\"hide()\" class=\"button\">Скрыть</div>\n\t</div>\n</div>\n\n<div *ngIf=\"!sellingNewService.main_view\">\n\t<app-selling-add></app-selling-add>\n</div>"

/***/ }),

/***/ "./src/app/selling/selling.component.ts":
/*!**********************************************!*\
  !*** ./src/app/selling/selling.component.ts ***!
  \**********************************************/
/*! exports provided: SellingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellingComponent", function() { return SellingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _selling_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selling.service */ "./src/app/selling.service.ts");
/* harmony import */ var _selling_new_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selling-new.service */ "./src/app/selling-new.service.ts");




var SellingComponent = /** @class */ (function () {
    function SellingComponent(sellingService, sellingNewService) {
        this.sellingService = sellingService;
        this.sellingNewService = sellingNewService;
        this.table_titles = {
            title: "Список продаж",
            id: "Номер продажи",
            client_name: "Клиент",
            sum: "Сумма",
        };
        this.btn_new_title = 'Новая продажа';
        this.btn_title = 'Список продаж';
    }
    SellingComponent.prototype.ngOnInit = function () {
        this.getSales();
    };
    SellingComponent.prototype.getSales = function () {
        var _this = this;
        this.sellingService.getSales()
            .subscribe(function (sales) { _this.sellingNewService.setSales(sales); });
    };
    SellingComponent.prototype.onSelect = function (sale) {
        this.selectedSale = sale;
    };
    SellingComponent.prototype.hide = function () {
        this.selectedSale = undefined;
    };
    SellingComponent.prototype.getSum = function (sale) {
        var sum = 0;
        for (var i = 0; i < sale.sales.length; i++) {
            sum += sale.sales[i].amount * sale.sales[i].product.price;
        }
        return sum;
    };
    SellingComponent.prototype.onBtnClick = function (val) {
        this.sellingNewService.main_view = val;
        if (val) {
            console.log("getSales", val);
            this.getSales();
        }
    };
    SellingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-selling',
            template: __webpack_require__(/*! ./selling.component.html */ "./src/app/selling/selling.component.html"),
            styles: [__webpack_require__(/*! ./selling.component.css */ "./src/app/selling/selling.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_selling_service__WEBPACK_IMPORTED_MODULE_2__["SellingService"],
            _selling_new_service__WEBPACK_IMPORTED_MODULE_3__["SellingNewService"]])
    ], SellingComponent);
    return SellingComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Пользователь\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map