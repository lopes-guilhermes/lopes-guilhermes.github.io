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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"teste\"> \n  <p-chart type=\"bar\" #graf\n    [data]=\"data\" \n    [options]=\"options\"\n    [plugins]=\"totalizer\"\n    width=\"900px\" \n    height=\"500px\">\n  </p-chart>\n</div>\n<button (click)=\"exportarPDF()\">Exportar PDF</button>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_2___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_3___default.a.pdfMake.vfs;
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.totalizer = {
            id: 'totalizer',
            beforeUpdate: function (chart) {
                var totals = {};
                var utmost = 0;
                chart.data.datasets.forEach(function (dataset, datasetIndex) {
                    if (dataset.type == 'bar') {
                        if (chart.isDatasetVisible(datasetIndex)) {
                            utmost = datasetIndex;
                            dataset.data.forEach(function (value, index) {
                                totals[index] = (totals[index] || 0) + value;
                            });
                        }
                    }
                });
                chart.$totalizer = {
                    totals: totals,
                    utmost: utmost
                };
            }
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.data = {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            datasets: [
                {
                    type: 'line',
                    label: 'Endividamento BVW',
                    data: this.getRandomArray(),
                    backgroundColor: '#2D313C',
                    borderColor: '#2D313C',
                    fill: false
                },
                {
                    type: 'line',
                    label: 'Vencidos BVW',
                    data: this.getRandomArray(),
                    backgroundColor: '#FFD100',
                    borderColor: '#FFD100',
                    fill: false
                },
                {
                    type: 'bar',
                    label: 'Prejuízo',
                    data: this.getRandomArray(),
                    stack: 'stack1',
                    yAxisID: 'bar-y-axis',
                    backgroundColor: 'rgba(165, 0, 33, 1)',
                    borderColor: 'rgba(165, 0, 33, 1)'
                },
                {
                    type: 'bar',
                    label: 'Vencidos',
                    data: this.getRandomArray(),
                    stack: 'stack1',
                    yAxisID: 'bar-y-axis',
                    backgroundColor: 'rgba(226, 103, 0, 1)',
                    borderColor: 'rgba(226, 103, 0, 1)'
                },
                {
                    type: 'bar',
                    label: 'À Vencer',
                    data: this.getRandomArray(),
                    stack: 'stack1',
                    yAxisID: 'bar-y-axis',
                    backgroundColor: 'rgba(33, 165, 250, 1)',
                    borderColor: 'rgba(33, 165, 250, 1)'
                },
                {
                    type: 'bar',
                    label: 'Outros',
                    data: this.getRandomArray(),
                    stack: 'stack1',
                    yAxisID: 'bar-y-axis',
                    backgroundColor: 'rgba(191, 191, 191, 1)',
                    borderColor: 'rgba(191, 191, 191, 1)'
                },
            ]
        };
        this.options = {
            elements: {
                line: {
                    tension: 0
                }
            },
            legend: {
                position: 'bottom'
            },
            scales: {
                yAxes: [
                    {
                        stacked: false,
                        ticks: { stepSize: 10, min: 0, max: 200 }
                    },
                    {
                        id: "bar-y-axis",
                        stacked: true,
                        display: false,
                        ticks: { stepSize: 10, min: 0, max: 200 }
                    }
                ]
            },
            plugins: {
                datalabels: {
                    formatter: function (value, ctx) {
                        var total = ctx.chart.$totalizer.totals[ctx.dataIndex];
                        return total.toLocaleString();
                    },
                    align: 'end',
                    anchor: 'end',
                    display: function (ctx) {
                        return ctx.datasetIndex === ctx.chart.$totalizer.utmost;
                    }
                }
            }
        };
    };
    AppComponent.prototype.getRandomInt = function () {
        var min = Math.ceil(15);
        var max = Math.floor(50);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    AppComponent.prototype.getRandomArray = function () {
        return [
            this.getRandomInt(), this.getRandomInt(),
            this.getRandomInt(), this.getRandomInt(),
            this.getRandomInt(), this.getRandomInt(),
            this.getRandomInt(), this.getRandomInt(),
            this.getRandomInt(), this.getRandomInt(),
            this.getRandomInt(), this.getRandomInt()
        ];
    };
    AppComponent.prototype.getBase64Img = function () {
        var base64 = this.graf.getBase64Image();
        return base64;
    };
    AppComponent.prototype.exportarPDF = function () {
        var documento = {
            content: [
                'Exemplo exportação para PDF',
                {
                    image: this.getBase64Img(),
                    width: 500,
                    height: 300,
                }
            ]
        };
        var pdf = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_2___default.a.createPdf(documento);
        pdf.download();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('graf'),
        __metadata("design:type", primeng_chart__WEBPACK_IMPORTED_MODULE_1__["UIChart"])
    ], AppComponent.prototype, "graf", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                primeng_chart__WEBPACK_IMPORTED_MODULE_2__["ChartModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! D:\Projects\charts-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map