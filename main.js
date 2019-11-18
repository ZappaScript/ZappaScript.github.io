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

/***/ "./src/app/about-me/about-me.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-me/about-me.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\nHi! I'm Juan, an aspiring software developer. Venezuela was my birthplace, 20-odd years ago, but I consider myself to be a citizen of the world; I hold both Venezuelan and Spanish citizenships. Though, this tropical paradise couldn't do much to stray me\nfrom developping a deep fascination with science and everything technological ever since I was a kid. \n\nThere were two things that led me to this career path: A toy keyboard synth, and Doom. \n\nI have many interests, music, electric movility, electronics, soccer, energy transition, science in general.\n\nI like games, but I wouldn't define myself as a gamer. If I had to pick 3, I'd choose Half Life 2, KOTOR and FTL.\n\nThe \"Zappa\" part of my github's username refers to Frank Zappa, one of my favourite musicians. Appart from him, my favourite band would definitely be \nRadiohead, but I like many things in music. From Robert Glasper to Quincy Jones, Pink Floyd to Radio Moscow, Tangerine Dream to Kraftwerk, RHCP to Incubus etc. I also like classical music a lot, specially Russian composers like Rachmaninoff, Musorgsky, Shostakovich and Korsakov. I used to like grunge, but nowadays it just smells funny to me. Even though it's hard for me to admit to it, I listen to Soda Stereo and Jorge Drexler from time to time, Dynamo is the former's favorite disk of mine. I guess that means that I'm into shoegaze, crap!\n\nWhen it comes to movies, I'm pretty vapid. I love both Blade Runner films, the OG Star Wars trilogy and the LOTR trilogy.\n\n</p>\n"

/***/ }),

/***/ "./src/app/about-me/about-me.component.scss":
/*!**************************************************!*\
  !*** ./src/app/about-me/about-me.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  -webkit-box-flex: 1;\n          flex: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2p1YW4vTGFuZGluZ1BhZ2Uvc3JjL2FwcC9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFNO1VBQU4sT0FBTSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgICBcbiAgICBmbGV4OjE7XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/about-me/about-me.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-me/about-me.component.ts ***!
  \************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__(/*! ./about-me.component.html */ "./src/app/about-me/about-me.component.html"),
            styles: [__webpack_require__(/*! ./about-me.component.scss */ "./src/app/about-me/about-me.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



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
/* harmony import */ var _project_grid_project_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-grid/project-grid.component */ "./src/app/project-grid/project-grid.component.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");





var routes = [
    { path: 'home', component: _project_grid_project_grid_component__WEBPACK_IMPORTED_MODULE_3__["ProjectGridComponent"] },
    { path: 'about', component: _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__["AboutMeComponent"], pathMatch: 'full' },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<router-outlet >\n</router-outlet>\n\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "router-outlet + * {\n  -webkit-box-flex: 1;\n          flex: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2p1YW4vTGFuZGluZ1BhZ2Uvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBTTtVQUFOLE9BQU0sRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInJvdXRlci1vdXRsZXQgKyAqIHtcbiAgICBcbiAgICBmbGV4OjE7XG5cbn0iXX0= */"

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
        this.title = 'LandingPage';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/pagination/pagination.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _project_grid_project_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./project-grid/project-grid.component */ "./src/app/project-grid/project-grid.component.ts");
/* harmony import */ var _projects_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects-service.service */ "./src/app/projects-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _gridcard_gridcard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gridcard/gridcard.component */ "./src/app/gridcard/gridcard.component.ts");
/* harmony import */ var _pagination_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pagination.service */ "./src/app/pagination.service.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _language_language_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./language/language.component */ "./src/app/language/language.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__["PaginationComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _project_grid_project_grid_component__WEBPACK_IMPORTED_MODULE_9__["ProjectGridComponent"],
                _gridcard_gridcard_component__WEBPACK_IMPORTED_MODULE_12__["GridcardComponent"],
                _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_14__["AboutMeComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__["SidebarComponent"],
                _language_language_component__WEBPACK_IMPORTED_MODULE_16__["LanguageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_projects_service_service__WEBPACK_IMPORTED_MODULE_10__["ProjectsService"], _pagination_service__WEBPACK_IMPORTED_MODULE_13__["PaginationService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<footer class=\"footer\">\n  <span> \n    <span>Made with </span> \n    <img [src]=\"'assets/img/8bitlogo.svg'\" alt=\"Angular logo\" ></span>\n \n  </footer>\n\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  flex-shrink: 0;\n  border-top: 2px solid #14ff00;\n  width: 100%;\n  height: 5vh;\n  margin-top: auto; }\n  .footer span {\n    color: #14ff00; }\n  .footer span * {\n      vertical-align: middle; }\n  img {\n  height: 1.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2p1YW4vTGFuZGluZ1BhZ2Uvc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLDZCQUFxQztFQUNyQyxXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQixFQUFBO0VBTGxCO0lBUUksY0FBc0IsRUFBQTtFQVIxQjtNQVdNLHNCQUFzQixFQUFBO0VBTzVCO0VBQ0UsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICBmbGV4LXNocmluazogMDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYigyMCwgMjU1LCAwKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXZoO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuXG4gIHNwYW4ge1xuICAgIGNvbG9yOiByZ2IoMjAsIDI1NSwgMCk7XG4gICAgXG4gICAgKiB7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgfVxuXG5cbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIC8vcGFkZGluZzogMC4yNXJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/gridcard/gridcard.component.html":
/*!**************************************************!*\
  !*** ./src/app/gridcard/gridcard.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='project-grid__outline'>\n  <div class='project-grid__card'>\n    <span [style.display]=\"'flex'\"> \n      <div [style.flex]=\"1\">\n        <h3 [style.text-transform]=\"'uppercase'\" [style.letter-spacing]=\"'0.1rem'\" attr.text-content=\"{{project.name}}\" >{{project.name}}</h3>\n      </div>\n      <div class='project-grid__stripes'></div>\n        <app-language [languages]='project.languages'>\n\n          </app-language>\n    </span>\n    <span class='img-container'> \n    <img [src]='project.previewImage' alt=\"\" srcset=\"\" ng [ngStyle]=\"{'height': '16.666vh', 'width': '29.6284vh'}\">\n        \n          <p >{{project.description}}</p>\n          <p>{{project.src}}</p>\n        \n    </span>\n    \n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/gridcard/gridcard.component.scss":
/*!**************************************************!*\
  !*** ./src/app/gridcard/gridcard.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-grid__outline {\n  --notchSize: 20px;\n  display: -webkit-box;\n  display: flex;\n  margin: 0%;\n  -webkit-clip-path: polygon(calc(100% - var(--notchSize)) 0%, 100% var(--notchSize), 100% 100%, var(--notchSize) 100%, 0% calc(100% - var(--notchSize)), 0 0);\n          clip-path: polygon(calc(100% - var(--notchSize)) 0%, 100% var(--notchSize), 100% 100%, var(--notchSize) 100%, 0% calc(100% - var(--notchSize)), 0 0);\n  padding: 0%;\n  height: 100%;\n  background-color: rgba(0, 239, 255, 0.125);\n  color: rgba(255, 255, 255, 0.7); }\n\n.project-grid__outline:hover {\n  background-color: #00efff;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s; }\n\n.project-grid__card {\n  --notchSize: 20px;\n  -webkit-box-flex: 1;\n          flex: 1;\n  padding: 2.5%;\n  background-color: black;\n  margin: 2px 1px;\n  -webkit-clip-path: polygon(calc(100% - var(--notchSize)) 0%, 100% var(--notchSize), 100% 100%, var(--notchSize) 100%, 0% calc(100% - var(--notchSize)), 0 0);\n          clip-path: polygon(calc(100% - var(--notchSize)) 0%, 100% var(--notchSize), 100% 100%, var(--notchSize) 100%, 0% calc(100% - var(--notchSize)), 0 0);\n  height: auto;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start; }\n\n.project-grid__card span {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n\n.project-grid__card .img-container {\n    -webkit-box-flex: 1;\n            flex: 1; }\n\n.project-grid__card .img-container img {\n      margin: auto; }\n\n.project-grid__stripes {\n  -webkit-box-flex: 0.2;\n          flex: 0.2 1 0%;\n  background-image: repeating-linear-gradient(45deg, transparent, transparent calc(1vw - 1px), white 1vw, white 1.5vw); }\n\n:host {\n  --notchSize: 20px;\n  -webkit-clip-path: polygon(calc(100% - var(--notchSize)) 0%, 100% var(--notchSize), 100% 100%, var(--notchSize) 100%, 0% calc(100% - var(--notchSize)), 0 0);\n          clip-path: polygon(calc(100% - var(--notchSize)) 0%, 100% var(--notchSize), 100% 100%, var(--notchSize) 100%, 0% calc(100% - var(--notchSize)), 0 0); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2p1YW4vTGFuZGluZ1BhZ2Uvc3JjL2FwcC9ncmlkY2FyZC9ncmlkY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IsVUFBVTtFQUNWLDRKQUFvSjtVQUFwSixvSkFBb0o7RUFDcEosV0FBVTtFQUNWLFlBQVk7RUFDWiwwQ0FBMEM7RUFDMUMsK0JBQTJCLEVBQUE7O0FBRy9CO0VBQ0kseUJBQXNDO0VBQ3RDLDRCQUFvQjtFQUFwQixvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxpQkFBWTtFQUNaLG1CQUFNO1VBQU4sT0FBTTtFQUNOLGFBQVk7RUFDWix1QkFBa0M7RUFDbEMsZUFBZTtFQUNmLDRKQUFvSjtVQUFwSixvSkFBb0o7RUFDcEosWUFBVztFQUNYLGtCQUFrQjtFQUNsQixvQkFBWTtFQUFaLGFBQVk7RUFDWix1QkFBMkI7VUFBM0IsMkJBQTJCLEVBQUE7O0FBVi9CO0lBWVEsb0JBQVk7SUFBWixhQUFZO0lBQ1osNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0IsRUFBQTs7QUFiOUI7SUFnQlEsbUJBQU87WUFBUCxPQUFPLEVBQUE7O0FBaEJmO01BbUJZLFlBQVksRUFBQTs7QUFJeEI7RUFDSSxxQkFBYztVQUFkLGNBQWM7RUFDZCxvSEFBZ0osRUFBQTs7QUFFcEo7RUFDSSxpQkFBWTtFQUNaLDRKQUFvSjtVQUFwSixvSkFBb0osRUFBQSIsImZpbGUiOiJzcmMvYXBwL2dyaWRjYXJkL2dyaWRjYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3QtZ3JpZF9fb3V0bGluZXtcbiAgICAtLW5vdGNoU2l6ZTogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMCU7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKGNhbGMoMTAwJSAtIHZhcigtLW5vdGNoU2l6ZSkpIDAlLCAxMDAlIHZhcigtLW5vdGNoU2l6ZSksIDEwMCUgMTAwJSwgdmFyKC0tbm90Y2hTaXplKSAxMDAlLCAwJSBjYWxjKDEwMCUgLSB2YXIoLS1ub3RjaFNpemUpKSwgMCAwKTtcbiAgICBwYWRkaW5nOjAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIzOSwgMjU1LCAwLjEyNSk7XG4gICAgY29sb3I6IHJnYmEoJGNvbG9yOiAjZmZmZmZmLCAkYWxwaGE6IDAuNyk7XG4gICAgXG59XG4ucHJvamVjdC1ncmlkX19vdXRsaW5lOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjM5LCAyNTUsIDEpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuXG59XG4ucHJvamVjdC1ncmlkX19jYXJke1xuICAgIC0tbm90Y2hTaXplOiAyMHB4O1xuICAgIGZsZXg6MTtcbiAgICBwYWRkaW5nOjIuNSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcbiAgICBtYXJnaW46IDJweCAxcHg7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKGNhbGMoMTAwJSAtIHZhcigtLW5vdGNoU2l6ZSkpIDAlLCAxMDAlIHZhcigtLW5vdGNoU2l6ZSksIDEwMCUgMTAwJSwgdmFyKC0tbm90Y2hTaXplKSAxMDAlLCAwJSBjYWxjKDEwMCUgLSB2YXIoLS1ub3RjaFNpemUpKSwgMCAwKTtcbiAgICBoZWlnaHQ6YXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAuaW1nLWNvbnRhaW5lcntcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG59XG4ucHJvamVjdC1ncmlkX19zdHJpcGVze1xuICAgIGZsZXg6IDAuMiAxIDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCBjYWxjKDF2dyAtIDFweCksIHJnYmEoMjU1LDI1NSwyNTUsMSkgMXZ3LCByZ2JhKDI1NSwyNTUsMjU1LDEpIDEuNXZ3KTtcbn1cbjpob3N0e1xuICAgIC0tbm90Y2hTaXplOiAyMHB4O1xuICAgIGNsaXAtcGF0aDogcG9seWdvbihjYWxjKDEwMCUgLSB2YXIoLS1ub3RjaFNpemUpKSAwJSwgMTAwJSB2YXIoLS1ub3RjaFNpemUpLCAxMDAlIDEwMCUsIHZhcigtLW5vdGNoU2l6ZSkgMTAwJSwgMCUgY2FsYygxMDAlIC0gdmFyKC0tbm90Y2hTaXplKSksIDAgMCk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/gridcard/gridcard.component.ts":
/*!************************************************!*\
  !*** ./src/app/gridcard/gridcard.component.ts ***!
  \************************************************/
/*! exports provided: GridcardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridcardComponent", function() { return GridcardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridcardComponent = /** @class */ (function () {
    function GridcardComponent() {
    }
    GridcardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GridcardComponent.prototype, "project", void 0);
    GridcardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gridcard',
            template: __webpack_require__(/*! ./gridcard.component.html */ "./src/app/gridcard/gridcard.component.html"),
            styles: [__webpack_require__(/*! ./gridcard.component.scss */ "./src/app/gridcard/gridcard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridcardComponent);
    return GridcardComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-navigation\">\n  <span> EN ES FR </span>\n  <span>JSE</span>\n  <span (click)='onClick(\"../home\")'>./Home</span>\n   <span class=\"projects-dropdown\"> <span>./Projects</span> \n   <ul class='nested-menu'>\n    <input type=\"text\" placeholder=\"Search:\" [(ngModel)]=\"inputSearch\">\n    <ng-container *ngFor=\"let searchTag of filteredTopics\">\n      \n      <li (click)='setProjectFilter(searchTag)'>{{searchTag}}</li>\n      \n    </ng-container>\n      \n</ul></span>\n  <span (click)='onClick(\"../about\")' >./About_me</span>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=VT323\");\n.nested-menu {\n  background-color: #ff00ef;\n  z-index: 5;\n  position: absolute;\n  text-align: left;\n  padding: 0;\n  margin: 0;\n  display: none;\n  list-style: none;\n  width: 100%; }\n.nested-menu input, .nested-menu input:hover {\n    background-color: #ff00ef;\n    overflow: hidden;\n    margin: 1vh 0vh;\n    max-width: 100%;\n    box-sizing: border-box;\n    color: #00f9ff;\n    border: 1px solid #cccccc; }\n.site-navigation {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: auto;\n  background-color: black;\n  width: 100%;\n  border-bottom: 2px;\n  border-bottom-style: solid;\n  color: #14ff00;\n  text-align: left; }\n.site-navigation span {\n    position: relative;\n    text-decoration: none;\n    color: #14ff00;\n    -webkit-box-pack: center;\n            justify-content: center;\n    font-size: 1.5rem; }\n.site-navigation span:nth-child(1), .site-navigation span:nth-child(1) * {\n    text-align: left;\n    grid-column: 1;\n    padding: 0, 0, 0 ,0.5vw;\n    margin: 0; }\n.site-navigation span:nth-child(2) {\n    text-align: center;\n    grid-column: 6/8; }\n.site-navigation span:nth-child(3) {\n    text-align: center;\n    grid-column: 10; }\n.site-navigation span:nth-child(4) {\n    text-align: center;\n    grid-column: 11; }\n.site-navigation span:nth-child(5) {\n    text-align: center;\n    grid-column: 12; }\n.site-navigation span:hover {\n    background-color: #ff00ef;\n    color: #00f9ff; }\n.site-navigation span:hover .nested-menu {\n      display: block; }\n.site-navigation span:hover .nested-menu li:hover {\n      background: blue;\n      width: auto; }\n.site-navigation span:hover .nested-menu li:hover a {\n        color: white; }\n.site-navigation span:hover p {\n      color: #00f9ff; }\n.site-navigation span:hover a {\n      color: #00f9ff; }\n.site-navigation .selectedLocale {\n    color: yellow;\n    font-size: 1.5rem; }\n.site-navigation a {\n    font-size: 1.5rem; }\n.site-navigation a p {\n      padding: 0;\n      margin: 0;\n      /*text-transform: uppercase;*/ }\n.site-navigation a p span {\n      padding: 0;\n      margin: 0;\n      color: yellow; }\n* {\n  font-size: 1.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2p1YW4vTGFuZGluZ1BhZ2Uvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDREQUFZO0FBSVo7RUFDSSx5QkFBa0M7RUFDbEMsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVUsRUFBQTtBQVRkO0lBV00seUJBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixjQUF1QjtJQUN2Qix5QkFBd0IsRUFBQTtBQUc5QjtFQUVJLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsd0JBQXdCO0VBQ3hCLHVCQTNCcUI7RUE0QnJCLFdBQVU7RUFDVixrQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLGNBQXFCO0VBQ3JCLGdCQUFnQixFQUFBO0FBVnBCO0lBYU0sa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFxQjtJQUNyQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQixFQUFBO0FBakJ2QjtJQXNCNkMsZ0JBQWU7SUFBQyxjQUFjO0lBQUUsdUJBQXNCO0lBQUUsU0FBUSxFQUFBO0FBdEI3RztJQXVCdUIsa0JBQWlCO0lBQUMsZ0JBQWdCLEVBQUE7QUF2QnpEO0lBd0J1QixrQkFBaUI7SUFBQyxlQUFlLEVBQUE7QUF4QnhEO0lBeUJ1QixrQkFBaUI7SUFBQyxlQUFlLEVBQUE7QUF6QnhEO0lBMEJ1QixrQkFBaUI7SUFBQyxlQUFlLEVBQUE7QUExQnhEO0lBNkJNLHlCQUFrQztJQUNsQyxjQUF1QixFQUFBO0FBOUI3QjtNQStCbUIsY0FBYSxFQUFBO0FBL0JoQztNQWlDUSxnQkFBZTtNQUVmLFdBQVUsRUFBQTtBQW5DbEI7UUFrQ1UsWUFBVyxFQUFBO0FBbENyQjtNQXVDUSxjQUF1QixFQUFBO0FBdkMvQjtNQXlDUyxjQUFzQixFQUFBO0FBekMvQjtJQWdETSxhQUFZO0lBQ1osaUJBQWlCLEVBQUE7QUFqRHZCO0lBcURNLGlCQUFpQixFQUFBO0FBckR2QjtNQXlEUSxVQUFTO01BQ1QsU0FBUTtNQUNSLDZCQUFBLEVBQThCO0FBM0R0QztNQWdFUSxVQUFTO01BQ1QsU0FBUTtNQUNSLGFBQVksRUFBQTtBQUtwQjtFQUNFLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VlQzMjMnKTtcblxuJGJhY2tncm91bmRfY29sb3IgOiBibGFjaztcbiRzbl9uX2NvbHMgOiAxMjtcbi5uZXN0ZWQtbWVudXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAyMzkpO1xuICAgIHotaW5kZXg6IDU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTpub25lO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBpbnB1dCwgaW5wdXQ6aG92ZXJ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAyMzkpO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIG1hcmdpbjogMXZoIDB2aDtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBjb2xvcjogcmdiKDAsIDI0OSwgMjU1KTtcbiAgICAgIGJvcmRlcjoxcHggc29saWQgI2NjY2NjYztcbiAgICB9XG4gIH1cbi5zaXRlLW5hdmlnYXRpb257XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZF9jb2xvcjtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGJvcmRlci1ib3R0b206MnB4O1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICAgIGNvbG9yOnJnYigyMCwgMjU1LCAwKTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIFxuICAgIHNwYW57XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjpyZ2IoMjAsIDI1NSwgMCk7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuXG4gICAgICBcbiAgICB9XG4gIFxuICAgIHNwYW46bnRoLWNoaWxkKDEpLCBzcGFuOm50aC1jaGlsZCgxKSAqIHsgdGV4dC1hbGlnbjpsZWZ0O2dyaWQtY29sdW1uOiAxOyBwYWRkaW5nOjAsIDAsIDAgLDAuNXZ3OyBtYXJnaW46MDt9XG4gICAgc3BhbjpudGgtY2hpbGQoMil7IHRleHQtYWxpZ246Y2VudGVyO2dyaWQtY29sdW1uOiA2Lzg7fVxuICAgIHNwYW46bnRoLWNoaWxkKDMpeyB0ZXh0LWFsaWduOmNlbnRlcjtncmlkLWNvbHVtbjogMTA7fVxuICAgIHNwYW46bnRoLWNoaWxkKDQpeyB0ZXh0LWFsaWduOmNlbnRlcjtncmlkLWNvbHVtbjogMTE7fVxuICAgIHNwYW46bnRoLWNoaWxkKDUpeyB0ZXh0LWFsaWduOmNlbnRlcjtncmlkLWNvbHVtbjogMTI7fVxuICBcbiAgICBzcGFuOmhvdmVye1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMjM5KTtcbiAgICAgIGNvbG9yOiByZ2IoMCwgMjQ5LCAyNTUpO1xuICAgICAgLm5lc3RlZC1tZW51e2Rpc3BsYXk6YmxvY2s7fVxuICAgICAgLm5lc3RlZC1tZW51IGxpOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kOmJsdWU7XG4gICAgICAgIGF7Y29sb3I6d2hpdGU7fVxuICAgICAgICB3aWR0aDphdXRvO1xuICBcbiAgICAgIH1cbiAgICAgIHB7XG4gICAgICAgIGNvbG9yOiByZ2IoMCwgMjQ5LCAyNTUpXG4gICAgICB9XG4gICAgICBhIHtjb2xvcjpyZ2IoMCwgMjQ5LCAyNTUpOyBcbiAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gICAgXG4gICAgLnNlbGVjdGVkTG9jYWxle1xuICAgICAgY29sb3I6eWVsbG93O1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxuICBcbiAgICAgIGF7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIFxuICAgICAgcHtcbiAgICAgICAgXG4gICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgIC8qdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsqL1xuICAgICAgICBcbiAgICAgICAgfVxuICAgICAgXG4gICAgICBwIHNwYW57XG4gICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgIGNvbG9yOnllbGxvdztcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgfVxuKiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projects_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projects-service.service */ "./src/app/projects-service.service.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, route, projectService) {
        this.router = router;
        this.route = route;
        this.projectService = projectService;
        this.inputSearch = '';
        this.filteredTopics = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onClick = function (route) {
        this.router.navigate([route], { relativeTo: this.route });
    };
    HeaderComponent.prototype.ngDoCheck = function () {
        this.filteredTopics = this.projectService.filterTopics(this.inputSearch).slice();
        console.log(this.filteredTopics);
    };
    HeaderComponent.prototype.setProjectFilter = function (filterTag) {
        this.projectService.filterProjectsByTopic(filterTag);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _projects_service_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/language/language.component.html":
/*!**************************************************!*\
  !*** ./src/app/language/language.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\n<ng-container *ngFor=\"let language of languages | keyvalue\">\n    \n\n    <tr>\n      <td>{{language.key}}</td>\n      <td>{{language.value}}</td>\n  </tr>\n  \n\n\n</ng-container>\n</table>\n"

/***/ }),

/***/ "./src/app/language/language.component.scss":
/*!**************************************************!*\
  !*** ./src/app/language/language.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td:nth-of-type(1) {\n  text-align: left; }\n\ntd:nth-of-type(2) {\n  text-align: right; }\n\ntable {\n  border-top: 12px solid transparent;\n  -o-border-image: url('borderImage.svg') 12;\n  -webkit-border-image: url('borderImage.svg') 12;\n          border-image: url('borderImage.svg') 12;\n  border-image-slice: 5% 5% 5% -25%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2p1YW4vTGFuZGluZ1BhZ2Uvc3JjL2FwcC9sYW5ndWFnZS9sYW5ndWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGtDQUFrQztFQUNsQywwQ0FBMkQ7RUFDeEQsK0NBQXdEO1VBQXhELHVDQUF3RDtFQUN4RCxpQ0FBaUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xhbmd1YWdlL2xhbmd1YWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGQ6bnRoLW9mLXR5cGUoMSl7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbnRkOm50aC1vZi10eXBlKDIpe1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG50YWJsZSB7XG4gICAgYm9yZGVyLXRvcDogMTJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAtby1ib3JkZXItaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvYm9yZGVySW1hZ2Uuc3ZnXCIpIDEyIDtcbiAgICAgICBib3JkZXItaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvYm9yZGVySW1hZ2Uuc3ZnXCIpIDEyIDtcbiAgICAgICBib3JkZXItaW1hZ2Utc2xpY2U6IDUlIDUlIDUlIC0yNSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/language/language.component.ts":
/*!************************************************!*\
  !*** ./src/app/language/language.component.ts ***!
  \************************************************/
/*! exports provided: LanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageComponent", function() { return LanguageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LanguageComponent = /** @class */ (function () {
    function LanguageComponent() {
    }
    LanguageComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LanguageComponent.prototype, "languages", void 0);
    LanguageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-language',
            template: __webpack_require__(/*! ./language.component.html */ "./src/app/language/language.component.html"),
            styles: [__webpack_require__(/*! ./language.component.scss */ "./src/app/language/language.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LanguageComponent);
    return LanguageComponent;
}());



/***/ }),

/***/ "./src/app/pagination.service.ts":
/*!***************************************!*\
  !*** ./src/app/pagination.service.ts ***!
  \***************************************/
/*! exports provided: PaginationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationService = /** @class */ (function () {
    function PaginationService() {
        this.currentIndex = 1;
        this.pageNumber = 0;
    }
    PaginationService.prototype.setNumPages = function (nPages) {
        this.pageNumber = nPages;
    };
    PaginationService.prototype.getNumPages = function () {
        return this.pageNumber;
    };
    PaginationService.prototype.getCurrentIndex = function () {
        return this.currentIndex;
    };
    PaginationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PaginationService);
    return PaginationService;
}());



/***/ }),

/***/ "./src/app/pagination/pagination.component.html":
/*!******************************************************!*\
  !*** ./src/app/pagination/pagination.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <span (click)=\"pagLeft()\"> \n      <strong [style.color]=\"getCurrentIndex()==1 ? 'rgb(0,63,0)':'rgb(20,255,0)'\" >  &lt; </strong>\n    </span>\n    <span *ngIf=\"getCurrentIndex()==1; else elseBlock\">\n        <a><strong [style.color]=\"'rgb(20,255,0)'\">{{getCurrentIndex()}}</strong></a> <span><strong [style.color]=\"'rgb(0,63,0)'\"> ... </strong></span> <a><strong [style.color]=\"'rgb(0,63,0)'\">{{getNumPages()}}</strong></a> \n        \n    </span>\n    <ng-template #elseBlock>\n      <span  *ngIf=\"getCurrentIndex()==getNumPages(); else finalElse\" >\n        <a><strong [style.color]=\"'rgb(0,63,0)'\">{{1}}</strong> </a>  <span><strong [style.color]=\"'rgb(0,63,0)'\"> ... </strong></span>  <a><strong [style.color]=\"'rgb(20,255,0)'\">{{getNumPages()}} </strong></a> \n      </span>  \n    </ng-template>\n    <ng-template #finalElse>\n        <a>{{1}} </a> <span><strong [style.color]=\"'rgb(0,63,0)'\">...</strong></span> <a><strong [style.color]=\"'green'\">{{getCurrentIndex()}} </strong></a> <span><strong [style.color]=\"'rgb(0,63,0)'\"> ... </strong></span> <a>{{getNumPages()}}</a> \n    </ng-template>\n    \n    \n  <span (click)=\"pagRight()\"> <strong [style.color]=\"getCurrentIndex()==getNumPages()? 'rgb(0,63,0)' :'rgb(20,255,0)'\">  &gt; </strong></span>\n</div>"

/***/ }),

/***/ "./src/app/pagination/pagination.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pagination/pagination.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2p1YW4vTGFuZGluZ1BhZ2Uvc3JjL2FwcC9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pagination/pagination.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pagination/pagination.component.ts ***!
  \****************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pagination.service */ "./src/app/pagination.service.ts");



var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(paginationService) {
        this.paginationService = paginationService;
    }
    PaginationComponent.prototype.getNumPages = function () {
        return this.paginationService.getNumPages();
    };
    PaginationComponent.prototype.getCurrentIndex = function () {
        return this.paginationService.getCurrentIndex();
    };
    PaginationComponent.prototype.pagLeft = function () {
        if (this.paginationService.getCurrentIndex() > 1) {
            this.paginationService.currentIndex--;
        }
    };
    PaginationComponent.prototype.pagRight = function () {
        if (this.paginationService.getCurrentIndex() < this.paginationService.getNumPages()) {
            this.paginationService.currentIndex++;
        }
    };
    PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.scss */ "./src/app/pagination/pagination.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"]])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/project-grid/project-grid.component.html":
/*!**********************************************************!*\
  !*** ./src/app/project-grid/project-grid.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project-grid\"  >\n\n    <ng-container *ngFor=\"let project of projects\">\n    <app-gridcard class=\"project-grid__card\" [project]=\"project\"> </app-gridcard> \n\n</ng-container>\n</div>\n<app-pagination> </app-pagination>\n                \n"

/***/ }),

/***/ "./src/app/project-grid/project-grid.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/project-grid/project-grid.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-grid {\n  display: grid;\n  margin: 2%;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto;\n  -webkit-column-gap: 40px;\n     -moz-column-gap: 40px;\n          column-gap: 40px;\n  row-gap: 40px; }\n\n.project-grid__card {\n  box-shadow: 2px 2px;\n  -webkit-transition: all 0.25s;\n  transition: all 0.25s; }\n\n.project-grid__card:hover {\n  box-shadow: 6px 6px;\n  -webkit-transition: all 0.25s;\n  transition: all 0.25s; }\n\n:host {\n  -webkit-box-flex: 1;\n          flex: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2p1YW4vTGFuZGluZ1BhZ2Uvc3JjL2FwcC9wcm9qZWN0LWdyaWQvcHJvamVjdC1ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLFVBQVM7RUFDVCw4QkFBOEI7RUFDOUIsd0JBQXdCO0VBRXhCLHdCQUFnQjtLQUFoQixxQkFBZ0I7VUFBaEIsZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTs7QUFJZjtFQUdFLG1CQUFtQjtFQUNuQiw2QkFBc0I7RUFBdEIscUJBQXNCLEVBQUE7O0FBR3hCO0VBRUUsbUJBQW1CO0VBQ25CLDZCQUFzQjtFQUF0QixxQkFBc0IsRUFBQTs7QUFHeEI7RUFFRSxtQkFBTTtVQUFOLE9BQU0sRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QtZ3JpZC9wcm9qZWN0LWdyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdC1ncmlke1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgbWFyZ2luOjIlO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gXG4gICAgY29sdW1uLWdhcDogNDBweDtcbiAgICByb3ctZ2FwOiA0MHB4O1xuICAgIFxuICB9XG4gIFxuICAucHJvamVjdC1ncmlkX19jYXJke1xuICBcbiAgICAvL2JhY2tncm91bmQ6IHJnYmEocmdiKDAsMjQ5LDI1NSksMC4zNSk7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweDtcbiAgICB0cmFuc2l0aW9uIDogYWxsIDAuMjVzO1xuICB9XG4gIFxuICAucHJvamVjdC1ncmlkX19jYXJkOmhvdmVye1xuICAgIC8vYmFja2dyb3VuZDogcmdiYShyZ2IoMCwyNDksMjU1KSwwLjUwKTtcbiAgICBib3gtc2hhZG93OiA2cHggNnB4O1xuICAgIHRyYW5zaXRpb24gOiBhbGwgMC4yNXM7XG4gIFxuICB9XG4gIDpob3N0IHtcblxuICAgIGZsZXg6MTtcbiAgICBcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/project-grid/project-grid.component.ts":
/*!********************************************************!*\
  !*** ./src/app/project-grid/project-grid.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectGridComponent", function() { return ProjectGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projects_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projects-service.service */ "./src/app/projects-service.service.ts");
/* harmony import */ var _pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pagination.service */ "./src/app/pagination.service.ts");




var ProjectGridComponent = /** @class */ (function () {
    function ProjectGridComponent(projectService, paginationService) {
        this.projectService = projectService;
        this.paginationService = paginationService;
    }
    ProjectGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.projects = this.projectService.projects.slice();
        this.projectService.projectsObservable.subscribe(function (val) { _this.projects = val; console.log(val); });
    };
    ProjectGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-grid',
            template: __webpack_require__(/*! ./project-grid.component.html */ "./src/app/project-grid/project-grid.component.html"),
            styles: [__webpack_require__(/*! ./project-grid.component.scss */ "./src/app/project-grid/project-grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_projects_service_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"], _pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"]])
    ], ProjectGridComponent);
    return ProjectGridComponent;
}());



/***/ }),

/***/ "./src/app/projects-service.service.ts":
/*!*********************************************!*\
  !*** ./src/app/projects-service.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _pagination_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pagination.service */ "./src/app/pagination.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var ProjectsService = /** @class */ (function () {
    function ProjectsService(http, sanitizer, paginationService) {
        var _this = this;
        this.http = http;
        this.sanitizer = sanitizer;
        this.paginationService = paginationService;
        this.filterTag = '';
        this.topicsSet = new Set();
        this.projectsObservable = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
            this.httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'token ' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].OAuth,
                    "Accept": "application/vnd.github.mercy-preview+json"
                }) };
        }
        this.getProjects().subscribe(function (data) {
            _this.projects = data;
            _this.projects.forEach(function (project) {
                console.log(project);
                _this.getLanguages(project.name).subscribe(function (res) { console.log('lRes', res); project.languages = res; });
                _this.getImage(project.name).subscribe(function (res) {
                    project.previewImage = _this.getSafeUrl("data:image/png;base64," + res.content);
                    console.log(project.previewImage);
                    ;
                });
                _this.addTopics(project.topics);
            });
            _this.getCurrentPage();
        });
    }
    ProjectsService.prototype.getCurrentPage = function (projects) {
        if (projects === void 0) { projects = this.projects; }
        console.log(projects, "getCurrentPage");
        this.paginationService.setNumPages(Math.ceil(projects.length / 4));
        var _projects = projects.slice((this.paginationService.getCurrentIndex() - 1) * 4, this.paginationService.getCurrentIndex() * 4);
        this.projectsObservable.next(_projects);
    };
    ProjectsService.prototype.getProjects = function () {
        return this.http.get('https://api.github.com/users/ZappaScript/repos', this.httpOptions);
    };
    ProjectsService.prototype.getLanguages = function (repo) {
        return this.http.get("https://api.github.com/repos/ZappaScript/" + repo + "/languages", this.httpOptions);
    };
    ProjectsService.prototype.getSafeUrl = function (url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    ProjectsService.prototype.getImage = function (repo) {
        return this.http.get("https://api.github.com/repos/ZappaScript/" + repo + "/contents/preview.png", this.httpOptions);
    };
    ProjectsService.prototype.addTopics = function (topics) {
        for (var _i = 0, topics_1 = topics; _i < topics_1.length; _i++) {
            var t = topics_1[_i];
            console.log(t);
            this.topicsSet.add(t);
        }
    };
    ProjectsService.prototype.filterTopics = function (searchTag) {
        this.getCurrentPage();
        return Array.from(this.topicsSet).filter(function (topic) { return (topic.indexOf(searchTag) > -1); });
    };
    ProjectsService.prototype.filterProjectsByTopic = function (topic) {
        var _projects = this.projects.filter(function (proj) { return (proj.topics.indexOf(topic) > -1); });
        this.getCurrentPage(_projects.slice(0));
        console.log(_projects, topic);
    };
    ProjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _pagination_service__WEBPACK_IMPORTED_MODULE_5__["PaginationService"]])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sidebar works!\n</p>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
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
    production: false,
    OAuth: '1c80f64d3f7eba9e5568b4dfec928142d5c41b26'
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

module.exports = __webpack_require__(/*! /home/juan/LandingPage/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map